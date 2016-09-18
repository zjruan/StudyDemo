define([
  './moduleSync.js',
], function(moduleSync) {
  'use strict';
  function module2(str){
    console.log('当前模块：module2','依赖：moduleSync');
    return moduleSync(str);
  }

  return module2;  
});

