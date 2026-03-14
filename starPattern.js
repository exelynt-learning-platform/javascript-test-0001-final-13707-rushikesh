let totalRows = 9;

for (let currentRow = 1; currentRow <= totalRows; currentRow++) {
    let spacesAtStart = Math.abs(5 - currentRow);
    let lineText = ' '.repeat(spacesAtStart);

    if (currentRow === 1 || currentRow === 9) {
        lineText += '*';
    } else {
        let innerSpaces = 2 * (Math.min(currentRow, 10 - currentRow) - 1) - 1;
        lineText += '*' + ' '.repeat(innerSpaces) + '*';
    }

    console.log(lineText);
}
