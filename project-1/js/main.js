var btn = document.getElementById('btn');
var txt = document.getElementById('text');
var colors = ['green','yellow','orange','pink','red'];
flag = 0;
var btf = function() {
    txt.style.color = colors[flag];
    flag++;
    if (flag>=5) {
        flag = 0;
    }
}

btn.addEventListener('click',btf);