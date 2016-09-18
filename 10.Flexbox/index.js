
if(typeof [].forEach !== 'function') {
  alert('您的浏览器过于老旧，请使用最新的浏览器！');
}
var GUID = 1;

function domReady(){
  var titles = document.querySelectorAll('h2'),
      aList = [],
      containerDom = document.querySelector('.container');

  titles.forEach(function (item, index, titles) {
    var itemStr = item.innerText;
    var anchorPoint = 'anchor_' + GUID++;
    aList.push('<li><a href="#' + anchorPoint + '" >' + itemStr + '</a></li>');
    var divDom = document.createElement('div');
    divDom.className = 'anchor-list';
    divDom.innerHTML = '<a name="'+ anchorPoint +'"></a>';
    containerDom.insertBefore(divDom, item);
  });
  var divNavDom = document.createElement('div');
  divNavDom.className = 'nav-right';
  divNavDom.innerHTML = '<ul>'+ aList.join('') +'</ul>';

  containerDom.insertBefore(divNavDom, containerDom.firstChild);
}
document.addEventListener('DOMContentLoaded',  domReady, false);



function column(){
  var demoDom = document.getElementById('demoDom');
  demoDom.children[1].innerHTML = "item2<br>cur H:" + getComputedStyle(demoDom.children[1]).height;
  demoDom.style.flexDirection = 'column';
}
function row(){
  var demoDom = document.getElementById('demoDom');
  demoDom.children[2].innerHTML = "item3<br>cur H:" + getComputedStyle(demoDom.children[2]).height;
  demoDom.style.flexDirection = 'row'; 
}