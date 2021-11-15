import renderStylish from './stylish.js';
import renderJson from './json.js';
import renderPlain from './plain.js';

const format = (data, extension) => {
  switch (extension) {
    case 'json':
      return renderJson(data);
    case 'plain':
      return renderPlain(data);
    case 'stylish':
      return renderStylish(data);
    default:
      return new Error(`Wrong input format: '${extension}'`);
  }
};
export default format;
