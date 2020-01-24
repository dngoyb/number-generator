// console.log(countries)
const header = document.querySelector('header');
const title = document.querySelector('h2');
const heading = document.querySelectorAll('h3');
const count = document.getElementById('total-countries');
const wrapper = document.querySelector('.countries-wrapper');
const table = document.createElement('table');

count.textContent = `Total number of countries: ${countries.length}`;
title.style.textTransform = 'uppercase';
title.style.letterSpacing = '5px';
header.style.lineHeight = '0.1';
header.style.marginTop = '50px';
table.style.margin = '0px auto';

for (const iterator of heading) {
	iterator.style.fontSize = '11px';
	iterator.style.fontWeight = '300';
	iterator.style.lineHeight = '0.3';
}

header.style.textAlign = 'center';
(function drawTable() {
	const rowSize = 33;
	const cellSize = 6;
	let country = countries;
	let count = 0;
	for (let r = 0; r < rowSize; r++) {
		const row = document.createElement('tr');

		for (let c = 0; c < cellSize; c++) {
			const cell = document.createElement('td');
			const cellText = document.createTextNode(country[count]);

			cell.style.border = '1px solid black';
			cell.style.width = '133px';
			cell.style.height = '103px';
			cell.style.textAlign = 'center';
			cell.appendChild(cellText);
			if (country[count] !== undefined) {
				row.appendChild(cell);
			}

			count++;
		}

		table.appendChild(row); // add the row to the end of the table body
	}

	wrapper.appendChild(table); // appends <table> into <div1>
})();
