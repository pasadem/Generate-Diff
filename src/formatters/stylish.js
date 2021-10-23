import _ from 'lodash';

const getIndent = (depth, count = 4) => ' '.repeat(depth * count - 2);
const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return `${value}`;
  }
  const result = Object.keys(value).map((key) => {
    const childValue = value[key];
    return `${getIndent(depth)}  ${key}: ${stringify(childValue, depth + 1)}`;
  });
  return `{\n${result.join('\n')}\n${getIndent(depth - 1)}  }`;
};
const stylish = (tree) => {
  const result = tree.map((node) => {
    const iter = (item, depth = 1) => {
      const {
        children, type, newValue, oldValue, key,
      } = item;
      switch (type) {
        case 'nested':
          return `${getIndent(depth)}  ${key}: {\n${children.map((child) => iter(child, depth + 1)).join('\n')}\n${getIndent(depth)}  }`;
        case 'added':
          return `${getIndent(depth)}+ ${key}: ${stringify(newValue, depth + 1)}`;
        case 'removed':
          return `${getIndent(depth)}- ${key}: ${stringify(oldValue, depth + 1)}`;
        case 'changed':
          return `${getIndent(depth)}- ${key}: ${stringify(oldValue, depth + 1)}\n${getIndent(depth)}+ ${key}: ${stringify(newValue, depth + 1)}`;
        case 'unchanged':
          return `${getIndent(depth)}  ${key}: ${stringify(oldValue, depth + 1)}`;
        default:
          throw new Error(`unexpected type ${type}`);
      }
    };
    return iter(node);
  });
  return `{\n${result.join('\n')}\n}`;
};

export default stylish;
