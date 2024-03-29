# path-to-path

From pathA to pathB，supported HashRouter and BrowserRouter

## Installation:  
```
npm install path-to-path --save
```

## Usage: 
```
const pathToPath = require('path-to-path');
const toPath = pathToPath(list, path);
```
### ptions:
- list: config path  list  
``` 
// example: 
  [
    {
      path: '/a/:id',
      toPath: '/abc/:id'
    },
    {
      path: '/a/b?name=:id',
      toPath: '/a/bc/:id'
    }
    ...
  ]
```
- path: operation path  
```
// example: 
/a/123
```

## Example: 
```
const pathToPath = require('path-to-path');
const list = [
  {
    path: '/a/:id',
    toPath: '/abc/:id'
  },
  {
    path: '/a/b?name=:id',
    toPath: '/a/bc/:id'
  }
]

const toPath = pathToPath(list, '/a/123');
console.log('toPath: ', toPath);

const toPath2 = pathToPath(list, '/a/b?name=123');
console.log('toPath2: ', toPath2);
```
