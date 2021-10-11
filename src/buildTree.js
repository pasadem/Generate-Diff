import _ from 'lodash';

const buildTree = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  const tree = keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return {
        type: 'next',
        children: buildTree(value1, value2),
        key,
      };
    }
    if (!_.has(data1, key)) {
      return {
        type: 'added',
        newValue: value2,
        key,
      };
    } if (!_.has(data2, key)) {
      return {
        type: 'removed',
        oldValue: value1,
        key,
      };
    } if (_.has(data1, key) && _.has(data2, key) && value1 !== value2) {
      return {
        type: 'changed',
        oldValue: value1,
        newValue: value2,
        key,
      };
    }
    return {
      type: 'unchanged',
      oldValue: value1,
      key,
    };
  });
  return tree;
};

export default buildTree;
