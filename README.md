### Hexlet tests and linter status:
[![Actions Status](https://github.com/pasadem/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/pasadem/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/dfc50c2d88cd46d069c1/maintainability)](https://codeclimate.com/github/pasadem/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/dfc50c2d88cd46d069c1/test_coverage)](https://codeclimate.com/github/pasadem/frontend-project-lvl2/test_coverage)
### Setup

```sh
make install
```

## Run "gendiff <filepath1> <filepath2>"
You can use formats: *json*, *plain*, *stylish = (default)*;
```sh
$ gendiff filepath1.(json/yml) filepath2.(json/yml)
$ gendiff -f <format> filepath1.(json/yml) filepath2.(json/yml)
```

## Run tests
```sh
$ make test
$ make test-coverage
```

## Examples:
$ gendiff plane format
  
[![asciicast](https://asciinema.org/a/FdQxK5zI4F8lYscVguuH313rd.svg)](https://asciinema.org/a/FdQxK5zI4F8lYscVguuH313rd)
  
$ gendiff json format filepath1.(json/yml) filepath2.(json/yml)
  
[![asciicast](https://asciinema.org/a/1qLMPg2Vj9djTEoDd5wb56rfn.svg)](https://asciinema.org/a/1qLMPg2Vj9djTEoDd5wb56rfn)
  
$ gendiff stylish format filepath1.(json/yml) filepath2.(json/yml)
  
[![asciicast](https://asciinema.org/a/93cawTixM9Jd1jn8qpVgwFC6o.svg)](https://asciinema.org/a/93cawTixM9Jd1jn8qpVgwFC6o)
