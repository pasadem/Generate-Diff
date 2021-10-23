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
      switch (type) {
        case 'nested':
          return `${children.filter((child) => child.type !== 'unchanged').map((child) => iter(child, `${newkey}${key}.`)).join('\n')}`;
        case 'added':
          return `Property '${newkey}${key}' was added with value: ${stringify(newValue)}`;
        case 'removed':
          return `Property '${newkey}${key}' was removed`;
        case 'changed':
          return `Property '${newkey}${key}' was updated. From ${stringify(oldValue)} to ${stringify(newValue)}`;
        default:
          throw new Error(`unexpected type ${type}`);
      }
    };
    return iter(node, '');
  });
  return `${result.join('\n')}`;
};

export default plain;
