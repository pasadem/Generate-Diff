import _ from 'lodash';

const stringify = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  return _.isString(value) ? `'${value}'` : value;
};
const plain = (tree) => {
  const result = tree.map((node) => {
    const iter = (item, newkey) => {
      const {
        children, type, newValue, oldValue, key,
      } = item;
      if (type === 'nested') {
        return `${children.filter((child) => child.type !== 'unchanged').map((child) => iter(child, `${newkey}${key}.`)).join('\n')}`;
      }
      if (type === 'added') {
        return `Property '${newkey}${key}' was added with value: ${stringify(newValue)}`;
      }
      if (type === 'removed') {
        return `Property '${newkey}${key}' was removed`;
      }
      return `Property '${newkey}${key}' was updated. From ${stringify(oldValue)} to ${stringify(newValue)}`;
    };
    return iter(node, '');
  });
  return `${result.join('\n')}`;
};

export default plain;
