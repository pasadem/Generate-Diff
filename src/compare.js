import _ from 'lodash';

const compareFlat = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  const result = keys.map((key) => {
    if (!_.has(data1, key)) {
      return `  + ${key}: ${data2[key]}\n`;
    } if (!_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}\n`;
    } if (!_.isEqual(data1[key], data2[key])) {
      return `  - ${key}: ${data1[key]} 
     + ${key}: ${data2[key]}\n`;
    }
    return `    ${key}: ${data1[key]}\n`;
  });
  return `{ \n${result.join(' ')} }`;
};
/* const compare = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  return keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return compareFlat(value1, value2);
    }
  });
};
export default compare;
 */