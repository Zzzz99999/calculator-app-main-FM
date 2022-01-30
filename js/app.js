'use strict';
const keys = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '.',
  '+',
  '-',
  '*',
  '/',
];
const form = document.querySelector('form');
const bodyTheme = document.body;
const keypad = document.querySelector('#keypad');
const screen = document.querySelector('h1');

form.addEventListener('click', (e) => {
  if (
    e.target.id === 'theme1' ||
    e.target.id === 'theme2' ||
    e.target.id === 'theme3'
  ) {
    bodyTheme.removeAttribute('class');
    bodyTheme.setAttribute('class', e.target.id);
  }
});

bodyTheme.addEventListener('keydown', input);
keypad.addEventListener('click', input);

function input(e) {
  const val = e.key || e.target.value;
  for (let key of keys) {
    if (val === key) {
      screen.append(val);
    } else if (val === '=' || val === 'Enter') {
      screen.textContent = eval(screen.textContent);
    }
  }
  if (val === 'Delete') {
    screen.textContent = '';
  }
  if (val === 'Backspace') {
    const content = [...screen.textContent];
    content.pop();
    screen.textContent = content.join('');
  }
}
