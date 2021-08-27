import yaml from 'js-yaml';

const parser = (data, format) => {
  if (format === '') {
    return JSON.parse(data);
  }
  if (format === '.yml') {
      return yaml.load(data);
  }
};

export default parser;
