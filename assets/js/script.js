const section3Content = document.querySelector('.section-3-content')

window.addEventListener('scroll', () => {
    if(window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
        section3Content.classList.add('change')
    }
})

function rain(canvas, text, symbol, speed) {
    var d = document.documentElement;
    var clinetW = d.clientWidth;
    var clinetH = d.clientHeight;

    //设置画布大小
    var canvas = canvas || document.querySelector('canvas');
    canvas.width = clinetW;
    canvas.height = clinetH;

    var cxt = canvas.getContext('2d');
    var rainStr = text || 'Kataraban';
    var symbol = symbol || 'z';
    var arr = rainStr.split(symbol);

    var fontSize = 18;
    // 计算行数
    var cols = Math.floor(clinetW / fontSize);
    // 初始化Y轴坐标
    var down = [];
    for (var i = 0; i < cols; i++) {
      down.push(Math.floor(Math.random() * -100));
    }

    function drawRain() {
      // 填充背景(ps:背景采用rgba,可尝试不同透明度的效果)
      cxt.fillStyle = 'rgba(0,0,0,.1)';
      cxt.fillRect(0, 0, clinetW, clinetH);

      // 设置字体颜色
      cxt.fillStyle = '#00ff00';
      for (var i = 0; i < down.length; i++) {
        var randomNum = Math.random();
        // 绘制文字
        cxt.fillText(arr[Math.floor(randomNum * arr.length)], i * fontSize, down[i] * fontSize);

        if (down[i] * fontSize > clinetH && randomNum > 0.9) {
          down[i] = 0;
        }

        down[i]++;
      }
    }
    var speed = speed || 30;
    setInterval(drawRain, speed);
  }
  var canvas = document.querySelector('canvas');
  var text = 'kaztazrazbanz';
  rain(canvas, text, '', 30);
 
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }
});

