import _ from 'lodash';

const getIndent = (depth, count = 4) => ' '.repeat(depth * count - 2);
const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return `${value}`;
  }
  const result = Object.keys(value).map((key) => {
    const childValue = value[key];
    return `${getIndent(depth)}  ${key}: ${stringify(childValue, depth + 1)}\n`;
  });
  return `{\n${result.join('\n')}${getIndent(depth - 1)}  }`;
};
const stylish = (tree) => {
  const result = tree.map((node) => {
    const iter = (item, depth = 1) => {
      const {
        children, status, newValue, oldValue, key,
      } = item;
      if (status === 'next') {
        return `${getIndent(depth)}  ${key}: {\n${children.map((child) => iter(child, depth + 1)).join('\n')}\n${getIndent(depth)}  }`;
      }
      if (status === 'added') {
        return `${getIndent(depth)}+ ${key}: ${stringify(newValue, depth + 1)}`;
      }
      if (status === 'removed') {
        return `${getIndent(depth)}- ${key}: ${stringify(oldValue, depth + 1)}`;
      }
      if (status === 'changed') {
        return `${getIndent(depth)}- ${key}: ${stringify(oldValue, depth + 1)}\n${getIndent(depth)}+ ${key}: ${stringify(newValue, depth + 1)}`;
      }
      return `${getIndent(depth)}  ${key}: ${stringify(oldValue, depth + 1)}`;
    };
    return iter(node);
  });
  return `{\n${result.join('\n')}\n}`;
};
/* const stylish = (tree) => {
  const result = tree.map((child) => formatter(child));
  return `${result.join('\n')}`;
}; */
export default stylish;
