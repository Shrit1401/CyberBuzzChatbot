// kebab(three dots)

var kebab = document.querySelector('.kebab'),
    middle = document.querySelector('.middle'),
    cross = document.querySelector('.cross'),
    dropdown = document.querySelector('.dropdown');

kebab.addEventListener('click', function () {
    middle.classList.toggle('active');
    cross.classList.toggle('active');
    dropdown.classList.toggle('active');
})

//enter key
var inputKey = document.querySelector("input");

var senBtn = document.querySelector(".btn");


inputKey.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        senBtn.click();
    }
})