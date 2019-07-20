const pathToRegexp = require('path-to-regexp');

function pathToPath(pathlist = [], url = ''){
  let toPath = '';
  pathlist.forEach(function(item, index){
    const r_path = pathToRegexp(item.path);
    const args = r_path.exec(url);
    if(args){
      const f_toPath = pathToRegexp.compile(item.toPath);
      toPath = f_toPath({ id: args[1] });
    }
  });
  return decodeURIComponent(toPath) || decodeURIComponent(url);
}

module.exports = pathToPath;