    // 异常情况
    // 
    /**
     * 1、图片较小，原始高度小于最小高度
     * 2、图片较宽，大于屏幕宽度
     * 3、滚动条的出现与隐藏对宽度的样式
     */
    
    var container = document.querySelector('#imgContainer');
    var clientWidth = document.body.clientWidth ;
    var minHeight = 150;
    
    function bulidLines() {
        var imgs = getImgs();
        var sumWidth = 0;
        var beforeIndex = 0;
        for(var i = 0, len = imgs.length; i < len; i++){
            var img = imgs[i];
            var iW = img.width/img.height*minHeight;
            if(sumWidth + iW > clientWidth || i === len-1){
                var line = bulidLine(beforeIndex, i, imgs);
                container.appendChild(line);
                
                sumWidth = iW;
                beforeIndex = i;
                
            }else{
                sumWidth += iW;
            }            
        }        
    }
    
    function bulidLine(beforeIndex, endIndex, imgList) {
        var lineContainer = document.createElement('div');
        lineContainer.className = 'line';
        var innerHt = '';
        var sumW = 0;
        for (;beforeIndex < endIndex; beforeIndex++){
            innerHt += ('<img src="' + imgList[beforeIndex].src + '"/>');
            sumW += imgList[beforeIndex].width * minHeight / imgList[beforeIndex].height;
        }
        lineContainer.innerHTML = innerHt;
        lineContainer.style.height = minHeight * clientWidth/ sumW  + 'px';
        
        return lineContainer;
    }
    
    function getImgs(){
        var imgs = [
            {src:'./imgs/1.jpg', width:391, height:220},
            {src:'./imgs/2.jpg', width:391, height:220},
            {src:'./imgs/3.jpg', width:245, height:220},
            {src:'./imgs/4.jpg', width:391, height:220},
            {src:'./imgs/5.jpg', width:391, height:220},
            {src:'./imgs/6.jpg', width:391, height:220},
            {src:'./imgs/7.jpg', width:469, height:220},
            {src:'./imgs/8.jpg', width:352, height:220},
            {src:'./imgs/9.jpg', width:330, height:220},
            {src:'./imgs/10.jpg', width:293, height:220},
            {src:'./imgs/11.jpg', width:352, height:220},
            {src:'./imgs/12.jpg', width:338, height:220},
            {src:'./imgs/13.jpg', width:293, height:220},
            {src:'./imgs/14.jpg', width:585, height:220},
            {src:'./imgs/15.jpg', width:336, height:220},
            {src:'./imgs/16.jpg', width:156, height:220},
            {src:'./imgs/17.jpg', width:532, height:220},
            {src:'./imgs/18.jpg', width:341, height:220}
        ];
        return imgs;
    }
   
    bulidLines();