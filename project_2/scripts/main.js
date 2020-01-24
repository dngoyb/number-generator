// console.log(countries)
const header = document.querySelector('header');
const title = document.querySelector('h2');
const heading = document.querySelectorAll('h3');
const count = document.getElementById('total-countries');
const wrapper = document.querySelector('.countries-wrapper');
const table = document.createElement('table');

count.textContent = countries.length;
table.style.margin = '0px auto';

header.style.textAlign = 'center';
(function drawTable() {
    const rowSize = 32;
    const cellSize = 6;
    let country = countries;
    let count = 0;
    for (let r = 0; r < rowSize; r++) {
        const row = document.createElement('tr');

        for (let c = 0; c < cellSize; c++) {
            const cell = document.createElement('td');
            const cellText = document.createTextNode(country[count]);

            cell.style.border = '1px solid black';
            cell.style.width = '180px';
            cell.style.height = '103px';
            cell.style.textAlign = 'center';

            cell.appendChild(cellText);
            row.appendChild(cell);

            count++;
        }

        table.appendChild(row); // add the row to the end of the table body
    }

    wrapper.appendChild(table); // appends <table> into <div1>
})();
