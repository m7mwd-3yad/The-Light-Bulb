let btn = document.querySelectorAll('button');

let lamb = document.querySelector('i');

function on() {
    lamb.style.color = 'yellow';
}

function off() {
    lamb.style.color = '#d3d7de';
}

btn[0].addEventListener('click', on);
btn[1].addEventListener('click', off);