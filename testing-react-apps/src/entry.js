/*
  eslint
	no-undef: 0
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button/Button';

const alertNumber = (num) => {
	const body = document.getElementById('root');
	const newNum = document.createElement('div');
	newNum.innerHTML = `${num} `;
	newNum.className = 'newNum';
	body.appendChild(newNum);
};

ReactDOM.render(
	(
		<Button alertNumber={alertNumber} />
	), document.getElementById('root'),
);

// Line of code to make unit tests fail, but integration tests fail
// document.querySelector('body').style.cssText = 'display: none';
