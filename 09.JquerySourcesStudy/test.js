// $('<li>1</li><li>2</li>').appendTo('ul');
        
// var str  = '<li>1</li><li>2</li>';
// var eleArr = $.parseHTML(str);

// $.each(eleArr,function(i,item){
//     $('ul').append(item);
// })

// var arr =['a','b'];
// var arrJson = {
//     0: 'a',
//     1: 'b',
//     length: 2
// }

// var arr2=['c','d'];

// console.log($.merge(arrJson,arr2));

// rootjQuery: $(document);

// $('<li>',{title: 'hello', html: '你好'}).appendTo('ul')

//  var dd=$.makeArray({0:'a',1:'b',length:2},this)
// console.log(dd);
// console.log($('div').get(0))


// $('#test1').pushStack($('#test2')).css('background','red')

// $('li').slice(0,1).css('background','red').end().css('color','blue')

// $.extend({
//     dis:function(){
//         console.log('a');
//     }    
// });

// $.fn.extend({
//     dis2:function(){
//         console.log('b')
//     }
// });

// $.dis();
// $.dis2();

// var a = {kk:1};
// $.extend(a,{name:'hello'},{age:30});
// console.log(a);

// $(function(){});

// $(document).ready(function(){ });

// $().ready();
//     // 延迟对象
//     jQuery.ready.promise().done( fn );
    
//     function test1(){
//         console.log('test1');
//     }
//       function test2(){
//         console.log('test2');
//     }
// function name(params) {
//     var dd = eval;
//     dd('var kk = 1')
// }

// name();
// alert(kk)
// console.log($('#xx').css('width'));
// $('#xx').css('width','30px')
// console.log($('#xx').width());
// console.log(document.getElementById('xx').Width);
// function log(str) {
//     console.log(str);
// }

// function showDom(text) {
//     xx.innerText = test;
// }
// var xhr = new XMLHttpRequest();
// var cacheIndex = 0;
// var timeIntervalId ;
// var msgEle = document.getElementById('xx');
// var requestState = true;
// var lastText,listId=0;

// xhr.responseType = 'text';
// xhr.open('get','http://localhost:3000/test.json');
// xhr.onreadystatechange = function (evt) {
//    if( xhr.readyState == 3){
//        if(!timeIntervalId){
//            updateUI();
//        }
       
//    }
//    if( xhr.readyState == 4){
//        requestState = false;
//        log('文档加载完成');
//    }
// }

// function updateUI() {
//     timeIntervalId = setInterval(function() {
//         var text = xhr.responseText.slice(cacheIndex);
//         var mm = (lastText + text).split('},');
        
//         cacheIndex = xhr.responseText.length;        
//         lastText = mm.length ? mm[mm.length - 1] : "";
        
//         for (var i=0, len = mm.length - 1; i < len; i++ ){
//             var people = /name":"(.+?)","age":(.+?)$/.exec(mm[i]);       
//             msgEle.insertAdjacentHTML('beforeend','<p>'+(listId++)+'、' + people[1] +":"+ people[2] +'</p>');
//         }
//         if(!requestState){
//             window.clearInterval(timeIntervalId);
//         }
//     }, 100);
// }

// xhr.send();