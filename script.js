const input = document.querySelector('#num');
const button = document.querySelector('#confirm-btn');
const p = document.querySelector('#result');

function odd_even() {
    const number = input.value;

    p.classList.remove('good', 'bad');

    if (number === '' || number === null) {
        p.textContent = 'Por favor, insira um número.';
        p.classList.add('bad');
        return;
    }

    if (number % 2 === 0) {
        p.textContent = `Seu número: ${number} é PAR!`;
        p.classList.toggle('good');
    } else {
        p.textContent = `Seu número: ${number} é ÍMPAR!`;
        p.classList.toggle('good');
    }
}

function clearInput() {
    input.value = '';
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    odd_even();
    clearInput();

});