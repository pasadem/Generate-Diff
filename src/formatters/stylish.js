import _ from 'lodash';

const getIndent = (depth, count = 4) => ' '.repeat(depth * count - 2);
const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return `${String(value)}`;
  }
  const result = Object.keys(value).map((key) => {
    const childValue = value[key];
    return `${getIndent(depth + 1)}  ${key}: ${stringify(childValue, depth + 1)}`;
  });
  return `{\n${result.join('\n')}\n${getIndent(depth)}  }`;
};
const iter = (tree, depth = 1) => {
  const result = tree.map((node) => {
    const {
      children, type, newValue, oldValue, key,
    } = node;
    switch (type) {
      case 'nested':
        return `${getIndent(depth)}  ${key}: {\n${iter(children, depth + 1)}\n${getIndent(depth)}  }`;
      case 'added':
        return `${getIndent(depth)}+ ${key}: ${stringify(newValue, depth)}`;
      case 'removed':
        return `${getIndent(depth)}- ${key}: ${stringify(oldValue, depth)}`;
      case 'changed':
        return `${getIndent(depth)}- ${key}: ${stringify(oldValue, depth)}\n${getIndent(depth)}+ ${key}: ${stringify(newValue, depth)}`;
      case 'unchanged':
        return `${getIndent(depth)}  ${key}: ${stringify(oldValue, depth)}`;
      default:
        throw new Error(`unexpected type ${type}`);
    }
  });
  return result.join('\n');
};

const renderStylish = (tree) => {
  const result = iter(tree, 1);
  return `{\n${result}\n}`;
};

export default renderStylish;
