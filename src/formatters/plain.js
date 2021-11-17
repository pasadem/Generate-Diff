import _ from 'lodash';

const stringify = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  return _.isString(value) ? `'${value}'` : value;
};
const iter = (tree, newkey) => {
  const filteredChildren = tree.filter((child) => child.type !== 'unchanged');
  const result = filteredChildren.map((node) => {
    const {
      children, type, newValue, oldValue, key,
    } = node;
    switch (type) {
      case 'nested':
        return `${iter(children, `${newkey}${key}.`)}`;
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
