var clipboard = new Clipboard('.btn');

clipboard.on('success', function(e) {
    console.log(e);
});

clipboard.on('error', function(e) {
    console.log(e);
});
window.onload=function() {
    var btn = document.getElementById('btn');
    btn.onclick=function() {
           btn.innerHTML = '已复制';
    }
}