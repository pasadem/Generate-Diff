import yaml from 'js-yaml';

/* const parsers = {
  '.yaml': yaml.safeLoad,
  '.json': JSON.parse,
};

const parse = (data, format) => parsers[format](data);
export default parse; */

const parse = (data, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(data);
    case '.yaml':
      return yaml.load(data);
    default:
      return new Error(`Wrong input format: '${format}'`);
  }
};

export default parse;
