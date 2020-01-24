// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
const title = document.getElementsByTagName('h1');
const heading = document.getElementsByTagName('h2');
const heading2 = document.getElementsByTagName('h3');
const wrapper = document.querySelector('.wrapper');
const table = document.createElement('table');

let form = document.createElement('form');
form.method = 'GET';

form.innerHTML = `<input type="text" id="input" placeholder="Enter a value">
	<input type="submit" id="btn" value="Generate" onclick()='myFunc'>`;

wrapper.appendChild(form);

const input = document.querySelector('input');
const btn = document.querySelector('#btn');

function myFunc() {
	btn.addEventListener('click', e => {
		e.preventDefault();
		return input.value;
	});
}

myFunc();

title[0].style.textAlign = 'center';
title[0].style.margin = '0px';
title[0].style.padding = '0px';
heading[0].style.textAlign = 'center';
heading[0].style.textDecoration = 'underline';
heading[0].style.fontFamily = `Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif `;
heading[0].style.fontWeight = '300';
heading2[0].style.fontWeight = '300';
heading[0].style.margin = '0px';
heading[0].style.padding = '0px';
heading2[0].style.textAlign = 'center';
heading2[0].style.textDecoration = 'underline';
heading2[0].style.margin = '0px';
heading2[0].style.padding = '0px';

const oddEven = num => {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
};

const primeNumber = num => {
	if (num < 2) return false;
	for (let i = 2; i < num; i++) {
		if (num % i === 0 && i !== num) {
			return false;
		}
	}
	return true;
};

(function drawTable() {
	let total = 100;
	let cellSize = 6;
	const rowSize = Math.round(total / cellSize);
	let val = 0;
	for (let r = 0; r < rowSize; r++) {
		const row = document.createElement('tr');
		if (r === rowSize - 1) {
			cellSize = total % cellSize;
		}
		for (let c = 0; c < cellSize; c++) {
			const cell = document.createElement('td');
			const cellText = document.createTextNode(val);

			cell.style.border = '1px solid #ffffff';
			cell.style.width = '103px';
			cell.style.height = '33px';
			cell.style.textAlign = 'center';
			cell.style.color = 'white';
			cell.style.fontSize = '24px';
			if (oddEven(val)) {
				cell.style.backgroundColor = '#21BF73';
			} else {
				cell.style.backgroundColor = '#FDDB3A';
			}
			if (primeNumber(val)) {
				cell.style.backgroundColor = '#FD5E53';
			}
			val += 1;
			cell.appendChild(cellText);
			row.appendChild(cell);
		}

		table.appendChild(row); // add the row to the end of the table body
	}

	wrapper.appendChild(table); // appends <table> into <div1>
})();

table.style.margin = '0px auto';
console.log(10 % 6);
