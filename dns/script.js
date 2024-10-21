const promjeniNaslov = document.querySelector('h1');
promjeniNaslov.textContent = 'Karlovac';

const h3Element = document.querySelector('span');
h3Element.outerHTML = '<h3>5 rijeka</h3>';

const infoElement = document.querySelector('.info');
infoElement.textContent = 'Peta rijeka je piva';

const listElement = document.querySelectorAll('li');

const rijeke = ['A', 'B', 'C'];

for (let i = 0; i < listElement.length; i++) {
    listElement[i].textContent = rijeke[i];
}
