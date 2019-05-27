document.body.onloud = function() {
    setTimeout(function() {
        var prelouder = document.getElementById('pre');
        if (!prelouder.classList.contains('done')) {
            prelouder.classList.add('done');
        }
    }, 1000);
};
