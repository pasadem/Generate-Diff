import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatter = (data, format) => {
  if (format === 'json') {
    return json(data);
  }
  if (format === 'plain') {
    return plain(data);
  }
  return stylish(data);
};
export default formatter;
