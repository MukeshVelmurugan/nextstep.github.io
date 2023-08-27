document.addEventListener('DOMContentLoaded', function () {
    const changeTextButton = document.getElementById('changeTextButton');
    const sectionText = document.querySelector('section p');

    changeTextButton.addEventListener('click', function () {
        sectionText.textContent = 'Text changed using JavaScript!';
    });
});
