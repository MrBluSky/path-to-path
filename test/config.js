const prePathList = [
  {
    path: '/a/:id',
    toPath: '/abc/:id'
  },
  {
    path: '/a/b?name=:id',
    toPath: '/a/bc/:id'
  },
  {
    path: '/a/b#name=:id',
    toPath: '/a/bc/def/:id'
  },
  {
    path: '/a/bc#name=:id',
    toPath: '/a/bc?name=:id'
  },
  {
    path: '/a/bcd/:id',
    toPath: '/a/bcd#name=:id'
  }
];

module.exports = prePathList;