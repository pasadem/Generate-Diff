import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const format = (data, extension) => {
  switch (extension) {
    case 'json':
      return json(data);
    case 'plain':
      return plain(data);
    case 'stylish':
      return stylish(data);
    default:
      return new Error(`Wrong input format: '${extension}'`);
  }
};
export default format;
