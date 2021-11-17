import renderStylish from './stylish.js';
import renderJson from './json.js';
import renderPlain from './plain.js';

const format = (data, formatName) => {
  switch (formatName) {
    case 'json':
      return renderJson(data);
    case 'plain':
      return renderPlain(data);
    case 'stylish':
      return renderStylish(data);
    default:
      return new Error(`Wrong input format: '${formatName}'`);
  }
};
export default format;
