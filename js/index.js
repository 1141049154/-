window.addEventListener('load', function() {
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function() {
            arrow_r.click();
        }, 2000)
    });
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circe = index;
            var foucswifth = focus.offsetWidth;
            animate(ul, -index * foucswifth);
        })


    }
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circe = 0;
    var foucswifth = focus.offsetWidth;
    arrow_r.addEventListener('click', function() {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * foucswifth);
        circe++;
        if (circe == ol.children.length) {
            circe = 0;
        }

        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circe].className = 'current';
    });


    arrow_l.addEventListener('click', function() {

        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * foucswifth);
        if (circe == 0) {
            circe = ol.children.length;
        }
        circe--;
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circe].className = 'current';
    });
    var timer = setInterval(function() {
        arrow_r.click();
    }, 2000)
});
// arrow_l.addEventListener('click', function() {
//     num++;
//     if (num == ol.children.length - 1) {
//         ul.style.left = '0';
//         num = 0;
//     }
//     animate(ul, num * foucswifth);