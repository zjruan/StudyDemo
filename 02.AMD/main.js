require([
    'add5'
], function(add5Fun) {
    'use strict';
    var num = add5Fun(5);
    document.writeln(num);
});