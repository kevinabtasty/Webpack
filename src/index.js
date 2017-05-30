
import 'jquery-ui';
import 'jquery-ui-css';

import '../css/h1.scss';
import './component.js';

import sum from './sum';

var title = document.createElement('h1');
title.innerText = 'First title';

var title2 = document.createElement('h1');
title2.innerText = 'Somme de 2 et 3 : ' + sum(2, 3);

console.debug('Starting . . .');
console.log($);
document.getElementById('header').appendChild(title);
document.getElementById('header').appendChild(title2);
$('#header').append('<h1>Second title (jquery)</h1>');

const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  System.import('./image').then(module => {
    module.default();
  });
};

document.body.appendChild(button);
