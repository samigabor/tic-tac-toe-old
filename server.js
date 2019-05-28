const matrix = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

console.log(matrix);

const checkRow = (rowIndex, currentSelection) => {
  const selections = [];
  matrix[rowIndex].forEach((col) => {
    if (col === currentSelection) {
      selections.push(col);
    }
  });
  return selections.length === matrix.length;
};


const checkCol = (colIndex, currentSelection) => {
  const selections = [];
  matrix.forEach((row) => {
    const cellToCheck = row[colIndex];
    if (cellToCheck === currentSelection) {
      selections.push(cellToCheck);
    }
  });
  return selections.length === matrix.length;
};


const checkPrincipalDiagonal = (currentSelection) => {
  const selections = [];
  matrix.forEach((row, index) => {
    const cellToCheck = row[index];
    if (cellToCheck === currentSelection) {
      selections.push(cellToCheck);
    }
  });
  return selections.length === matrix.length;
};


const checkSecondaryDiagonal = (currentSelection) => {
  const selections = [];
  matrix.forEach((row, index) => {
    const cellToCheck = row[matrix.length - index - 1];
    if (cellToCheck === currentSelection) {
      selections.push(cellToCheck);
    }
  });
  return selections.length === matrix.length;
};


const checkWinner = (cellIndex, currentSelection) => {
  const [rowIndex, colIndex] = cellIndex;

  console.log('row', rowIndex, checkRow(rowIndex, currentSelection));
  console.log('col', colIndex, checkCol(colIndex, currentSelection));

  if (rowIndex === colIndex) {
    console.log('principal diagonal: ', checkPrincipalDiagonal(currentSelection));
  }

  if (parseInt(rowIndex, 10) + parseInt(colIndex, 10) === matrix.length - 1) {
    console.log('secondary diagonal: ', checkSecondaryDiagonal(currentSelection));
  }
};


const updateMatrix = (index, clientSelection) => {
  matrix[index[0]][index[1]] = clientSelection;
};

updateMatrix('00', 1);
updateMatrix('01', 1);
updateMatrix('02', 1);
checkWinner('00', 1);
