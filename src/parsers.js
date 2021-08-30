import yaml from 'js-yaml';

/* const parsers = {
  '.yaml': yaml.safeLoad,
  '.json': JSON.parse,
};

const parse = (data, format) => parsers[format](data);
export default parse; */

const parse = (data, format) => {
  if (format === '.json') {
    return JSON.parse(data);
  }
  if (format === '.yml') {
    return yaml.load(data);
  }
};

export default parse;
 