import randomStylish from './stylish.js';
import randomJson from './json.js';
import randomPlain from './plain.js';

const format = (data, extension) => {
  switch (extension) {
    case 'json':
      return randomJson(data);
    case 'plain':
      return randomPlain(data);
    case 'stylish':
      return randomStylish(data);
    default:
      return new Error(`Wrong input format: '${extension}'`);
  }
};
export default format;
