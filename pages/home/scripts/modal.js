let marks = document.querySelectorAll('.markBtn');

// открытие-закрытие модального окна
marks.forEach(function(element) {
    let parent = element.closest('td');
    let modal = parent.querySelector('.modal');
    let closeModalButton = modal.querySelector('.close-modal');

    element.addEventListener('click', function() {
        modal.classList.toggle('showed');
    });

    closeModalButton.addEventListener('click', function() {
        modal.classList.remove('showed');
    });
});

//отправда данных в бд
const modalSaveButtons = document.querySelectorAll('#modalSave');
const markButtons = document.querySelectorAll('.mark');

modalSaveButtons.forEach(modalSaveButton => {
    modalSaveButton.addEventListener('click', function () {
        const parentTd = this.closest('td');

        const userData = parentTd.getAttribute('data-user');
        const groupData = parentTd.getAttribute('data-group');
        const disciplineData = parentTd.getAttribute('data-discipline');
        const workData = parentTd.getAttribute('data-work');

        console.log('user: ' + userData + ' group: ' + groupData + ' discipline: ' + disciplineData + ' data-work: ' + workData);
    });
});

// Добавляем обработчик события при нажатии на кнопку .mark
markButtons.forEach(markButton => {
    markButton.addEventListener('click', function () {
        if (this.classList.contains('completed')) {
            this.classList.remove('completed');
            this.classList.add('not-completed');
            this.textContent = 'Не выполнено';
        } else {
            this.classList.remove('not-completed');
            this.classList.add('completed');
            this.textContent = 'Выполнено';
        }
    });
});