define([
  '../modules/common.js',
  '../modules/moduleSync.js'
], function(common,moduleSync) {
  'use strict';
  console.log('当前模块：amd', '依赖common、moduleSync')
  var str =  common("zjruan");
  var str2 = moduleSync('zjruan2');
  console.log(str);
  console.log(str2);
  console.log('index js file');
  return 'amdJs run end';
});