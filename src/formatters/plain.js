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
        children, status, newValue, oldValue, key,
      } = item;
      if (status === 'next') {
        return `${children.filter((child) => child.status !== 'unchanged').map((child) => iter(child, `${newkey}${key}.`)).join('\n')}`;
      }
      if (status === 'added') {
        return `Property '${newkey}${key}' was added with value: ${stringify(newValue)}`;
      }
      if (status === 'removed') {
        return `Property '${newkey}${key}' was removed`;
      }
      return `Property '${newkey}${key}' was updated. From ${stringify(oldValue)} to ${stringify(newValue)}`;
    };
    return iter(node, '');
  });
  return `${result.join('\n')}`;
};

export default plain;
