import yaml from 'js-yaml';

const parsers = {
  '.yaml': yaml.safeLoad,
  '.json': JSON.parse,
};

const parse = (data, format) => parsers[format](data);
export default parse;
