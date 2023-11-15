var buttons = document.getElementsByClassName('markBtn');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        this.classList.toggle('passed');
        if (this.classList.contains('passed')) {
            this.dataset.passed = "1";
        } else {
            this.dataset.passed = "0";
        }
        console.log(this.dataset);
    });
}