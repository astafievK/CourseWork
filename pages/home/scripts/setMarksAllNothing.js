const allButton = document.querySelectorAll('.action.all');
const nothingButton = document.querySelectorAll('.action.nothing');

allButton.forEach(button => {
    button.addEventListener('click', function() {
        const parentRow = this.closest('tr');
        const markButtons = parentRow.querySelectorAll('.markBtn');
        markButtons.forEach(markButton => {
            if (!markButton.classList.contains('passed')) {
                markButton.classList.add('passed');
                markButton.dataset.passed = "1";
                console.log(markButton.dataset);
            }
        });
    });
});

nothingButton.forEach(button => {
    button.addEventListener('click', function() {
        const parentRow = this.closest('tr');
        const markButtons = parentRow.querySelectorAll('.markBtn');
        markButtons.forEach(markButton => {
            if (markButton.classList.contains('passed')) {
                markButton.classList.remove('passed');
                markButton.dataset.passed = "0";
                console.log(markButton.dataset);
            }
        });
    });
});