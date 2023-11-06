const selectedButton = document.querySelectorAll('.action.selected');

selectedButton.forEach(button => {
    button.addEventListener('click', function() {
        const parentRow = this.closest('tr');
        const markButtons = parentRow.querySelectorAll('.markBtn');
        const inputNumbers = parentRow.querySelectorAll('.action.numbers');
        const inputText = inputNumbers[0].value;
        const textArray = inputText.replace(/\s/g, "").split(',');
        const numbersArray = [];

        textArray.forEach(item => {
            if (item.includes('-')) {
                const range = item.split('-');
                const start = parseInt(range[0]);
                const end = parseInt(range[1]);
                for (let i = start; i <= end; i++) {
                    numbersArray.push(i.toString());
                }
            } else {
                numbersArray.push(item);
            }
        });

        markButtons.forEach(button => {
            if(numbersArray.includes(button.dataset.value))
            {
                button.classList.add('passed')
                console.log(button.dataset)
            }
        })
    });
});