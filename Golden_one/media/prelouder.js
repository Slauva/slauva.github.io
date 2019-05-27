window.onload = () => {
    setTimeout(function() {
        var pre = document.getElementById('pre');
        if (!pre.classList.contains('done')) {
            pre.classList.add('done');
            pre.classList.remove('louder');
        }
    }, 1000);
};
