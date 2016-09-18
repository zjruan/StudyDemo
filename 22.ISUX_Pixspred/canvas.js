(function(){
	var canvas = {},
		image = {};
	var particles = [];
	//获取canvas元素
	canvas.obj = document.getElementById('myCanvas');

	if(canvas.obj.getContext) {

		//获取渲染上下文
		canvas.ctx = canvas.obj.getContext('2d');

		//设置画布大小为屏幕宽高
		canvas.w = canvas.obj.width = document.body.clientWidth;
		canvas.h = canvas.obj.height = document.body.clientHeight;

		//新建一个image对象
		var img = new Image();

		//图像加载完后
		img.onload = function() {
			//把图像信息保存在image里面
			image.obj = img;
			image.w = img.width;
			image.h = img.height;
			image.x = parseInt(canvas.w/2 - image.w/2);
			image.y = 200;

			//把图像绘制到画布坐标为(100,100)的地方
			canvas.ctx.drawImage(image.obj,image.x,image.y,image.w,image.h);

			image.imageData = canvas.ctx.getImageData(image.x,image.y,image.w,image.h);

			//计算出符合要求的像素
			calculate();

			//计算后绘到画布上
			requestAnimationFrame(draw);
		};

		//设置image的source
		img.src = 'img/sb.png';
	}


	//计算并保存坐标
	function calculate() {
		var len = image.imageData.length;
		//只保存100行，100列的像素值
		var cols = 140,
			rows = 140;
		//设成150行，100列后每个单元的宽高
		var s_width = parseInt(image.w/cols),   
			s_height = parseInt(image.h/rows);
		var pos = 0; //数组中的位置
		var par_x, par_y;  //粒子的x,y坐标
		var data = image.imageData.data;  //像素值数组
		var now = new Date().getTime();

		for(var i = 0; i < cols; i++) {
			for(var j = 0; j < rows; j++) {
				//计算(i,j)在数组中的R的坐标值
				pos = (j*s_height*image.w + i*s_width)*4;
				//判断像素透明度值是否符合要求
				if(data[pos+3] > 100){
					var particle = {
						//x,y值都随机一下
						x: image.x + i*s_width + (Math.random() - 0.5)*20,
						y: image.y + j*s_height + (Math.random() - 0.5)*20
					}
					// 根据图像不同的色值来设定粒子色值
					particle.fillStyle = 'rgba('+data[pos]+','+data[pos+1]+','+data[pos+2]+','+(data[pos+3]/255).toFixed(2)+')';

					if(true){
						particle.flotage = true;
						particle.sX = particle.x;
						particle.sY = particle.y;
						particle.direction = particle.y/particle.x;//(image.y + s_height*rows/2 - particle.y)/(image.x + s_width*cols/2 - particle.x);
						particle.x = particle.y = 0;
						particle.speedx = (Math.random() - 0.5)*20;
						particle.speedy = particle.speedx * particle.direction ;//(Math.random() - 0.5)*20;
						particle.deathTime = now + Math.random() * 15000;
					}
					//符合要求的粒子保存到数组里
					particles.push(particle);
				}
			}
		}
	}

	//绘图案
	function draw() {
		//清空画布					
		canvas.ctx.clearRect(0,0,canvas.w,canvas.h);

		var len = particles.length;
		var curr_particle = null;
		var now = new Date().getTime();

		for(var i = 0; i < len; i++) {
			curr_particle = particles[i];

			if(curr_particle.flotage){
				curr_particle.x += curr_particle.speedx;
				curr_particle.y +=  curr_particle.speedy;
			}

			if(curr_particle.deathTime < now){
				curr_particle.x = curr_particle.sX;
				curr_particle.y = curr_particle.sY;
				curr_particle.speedx = (Math.random() - 0.5)*2;
				curr_particle.speedy = (Math.random() - 0.5)*2;
				curr_particle.deathTime = now + Math.random() * 15000;
			}

			//设置填充颜色
			canvas.ctx.fillStyle = curr_particle.fillStyle;
			//绘粒子到画布上
			canvas.ctx.fillRect(curr_particle.x,curr_particle.y,curr_particle.flotage?2:1,curr_particle.flotage?2:1);
		}
		requestAnimationFrame(draw);
	}
}())