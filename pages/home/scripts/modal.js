let marks = document.querySelectorAll('.markBtn');
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