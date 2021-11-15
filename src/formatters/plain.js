import _ from 'lodash';

const stringify = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  return _.isString(value) ? `'${value}'` : value;
};
const iter = (tree, newkey) => {
  const result = tree.map((node) => {
    const {
      children, type, newValue, oldValue, key,
    } = node;
    const filteredChildren = (items) => items.filter((item) => item.type !== 'unchanged');
    switch (type) {
      case 'nested':
        return `${iter(filteredChildren(children), `${newkey}${key}.`)}`;
      case 'added':
        return `Property '${newkey}${key}' was added with value: ${stringify(newValue)}`;
      case 'removed':
        return `Property '${newkey}${key}' was removed`;
      case 'changed':
        return `Property '${newkey}${key}' was updated. From ${stringify(oldValue)} to ${stringify(newValue)}`;
      default:
        throw new Error(`unexpected type ${type}`);
    }
  });
  return result.join('\n');
};
const renderPlain = (tree) => {
  const result = iter(tree, '');
  return `${result}`;
};

export default renderPlain;
