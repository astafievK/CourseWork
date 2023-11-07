var elements = document.querySelectorAll('.fullname');

function calculateWidth() {
    var maxWidth = 0;
    for (var i = 0; i < elements.length; i++) {
        var width = elements[i].offsetWidth;
        if (width > maxWidth) {
            maxWidth = width;
        }
    }

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.width = maxWidth + 'px';
    }
}

calculateWidth();

window.addEventListener('resize', calculateWidth);
window.addEventListener('orientationchange', calculateWidth)