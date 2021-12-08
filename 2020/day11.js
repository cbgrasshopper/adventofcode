const rawInput = `LLLLLLL.LLLLLLLLLLLLLLL.LLL.LLLL.LLLLLLL.L.LLLLLLL.LLLLLL.LLLLLLLL.LLLLL..LLLLLLLLLLLLLLLLLL
LLLLLLL.LLLLLL.LLLL.LLL.LLLLLLLLLL.LLLLLLL.LLLLL.L.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL
.LLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLL.LL.LLLLLLL.LLL.LL.LLLLLLLLLLL.LLL..LLLLLLLL.LLLLLLLL
LLLLLLLLLLLLLLL..LLLLLL.LLLLLLLLLLLLL.LLLL.LLLLLLLLLLLL.L.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL
LLLLL.L.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLL.LLL..LLL.LLLLLL.LLLLLL.LLLL.LLLL.L.LLLLLL
LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.L.LL.LLLL.LLLLLL..LLLLLL.LLLLLLLL..LLLLL.LLLLLLLL..LLLLLLLL
LLLLLLL.LLLLLLLL.LLLLLL.LLLLL.L.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL
.LLLLLL..LLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLL.L.LLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLL
..LLLL......L.L..L..L..L.....LL..L.....L.....LLL.L.L.LL...L.....L...LL..L......L...LL......L
LL.LLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLLL.LLLL.LLLLLL..LLLLLL.LLLL.LLL.LLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLL..LLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLL.LLLL.LL.LLLLLL.LLLL.LLLLLLLL.LLLLLL..LL.LLLLL.LLLL..L.
LLLLLLLLLLLLLL.LL.LLLLL.LLLLLLLLLLLLL.L.LL.LLLLLLL.L.LLLL.LLLLLLLL.LLLLLL.L.LLLLLLLLLLLLLLLL
LLLLLLL.L.LLLLLL.LLLLLLLLL.LL.LLLLL.LLLLL..L.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LL
LLLLLLLLLLLLLLLL.LLLLLLLLL.LL.LLLLLLL.LLLL.LLLLLLL.LLLLLLLLLLLLLL..LLLLLL.LLLLLLLLL.LLLLLLLL
LLLLLLL.LLLLLLL..LLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LL.LLLLLLLLLLLLLLLL.LLLLLLLL
LLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLLLL.LLLLLL.L.LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL
LLLLLLLLLLLLLLLL.LLLLL..LLLLLLLLLL.LLL.LLLLLLLLLLLLLL.LLL.LLLLLLLLL.LLLLL.L.LLLL.LLLLLLLLLLL
.L......L.LL.L...L.....L..L..L...LL.L.......L.............LL.L......LL.L...LL.L...L.....LL..
LL.LLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL
LLLLL.L.L.LLLLLLLLL.LLLLLLLLLLLLL.LL.LLLLLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLL
LLLL.LL.LL.LLLLL.LLLL.L.LLLLL.LLLLLLLLLL.LLLLLLLLL..L.LLLLLLLLLLL.L.LLLLL.LLLLLLLLLLLLLLLL.L
LLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLL.L
.......LL...L.......LL...L.......LLL......L..L...L...L.....LL..L.L......L.LL.....LL.....L...
LLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLLL.LL.LLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLL
LLLLLLL.LLLLLLLLLLLLLL..LLLLLLLLLLLLL.LLLL.LL.LLLL.LLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLL
LLLLLLLLLL.LLLLLL.L.LLL.L.LLL.LLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLL
L.LLLLLLL.LLLLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLL..LLLLLL.LLLLLLLLL.LLLLLLLL
LL.LLLL.LLLLLLLL.LLLLLL.LLLLL.LL.LLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLL.LLLLLL.LLLLLL.LL.LLLLLLLL
LLLLL.L.LLLLLLLL.LLLLLLLLLL.L.LLL.LLL.LLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLL
LLLLLLL.LLLLLLLL.LLLLLL.LLLLL.LLLLL.L.LLLLLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLL.LLLLLL.LL.LLL.LLLL
L..LL.........L....L....L..L.LL.....LL.L.LL...L........L...L...L...L.LLL..LL..LLLLL.L.......
LLLLLLL.LLLLLLLLLLLL.LL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLL.L.LLLLLLLL.LLLLLL.LLLLLLL.L..LLLLLLL
LLLLLLLL.LLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLLL.LLLLLLLL.LLLLLL.LLLL.L.LL.LLLLLLLL
.LLLLLL.LLLLLL.L.LLLLLL.LLLLL.LLLLLLL.L.LL.LLLLLLLLLLL.LLLLLLLLLLL.LLLLLL.LLLLLLLL..LLLLLLLL
LL.LLLL..LLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLL.LLLLLL..LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL
L..LL..........L......L..L....L..L.L.LL.LLL..L.L.L.LLLL...L..L..L.L.L..LLLL.L.L...L..LL.....
LLLLLLLLLLLLLLLLLLLLLLL.LL.LLLLLLLLLL.LL.L.LLLLLLL.LLLLLL.LLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLL
LLLLLLL.LLLLLLLL.LLLLLLLLLLLL.LLLL.LL.LLLLL.LL.LLL.LLLLLLLLLLLLLLL.LLL.LLLLLLLLLLLLL.LLLLLL.
LLLLLL.LLLLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL.LLLLLL.LLLLLLL.LLLLLLLLLL
LLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLL
LLLLLLL.LLLL.LLL.LLLLLL.LLL.L.LLLLLLLLL.LL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLL.LLL.L.LLLLLL
LLLLLLLLLLLLL.LL.LLLLLL.LLL.L.LLLLLLL.LLLLLLLLLLLL.LLLLLL.LLLL.LLL.LLLLLL.LLLLLL.LLLLLLLLLLL
.L.LLLL.L.LLL.L....L...LL.L.L..LL.L.LLLL.L..L..L.L.LL...LL..L.L.L...LL.L.......LL..LLL......
LLLLL.L..LLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LL.LLLL.LLLLLL.LLLLLL.L.LLLLLL.LLLLLLLLLLLL.LLLLL
LLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLL..LLL.LLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLL
LLLLLLL.LLLLLLLL.LLLL.L.LLL.LLLLLLLLL.LLLL.LLLLLLL.L..LLL.LLLLLLL..LL.LLL.LLLLLLLLL.LLL.LLL.
LLLLLLL.LLLLLLLL.LLLLLL.L.LLLLLLLLLL..LLLLLLLLLLLL.L.LLLL.LLLLLLLL.LLLLLL.L.LLLL.LL.LLLL.LLL
LLLL.LLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL
LLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLL.LLLLLLL.LLLLLL.LL.LLLLL.LLL.LL.LLLLLLLLLLLLLLLLLL
LL.LLLLLLLLLLLLL.LLLLLLLLLLLL.LLL.LLL.LLLL.LLLLLLLLLLLL.L.LLLLL.LL.LLLLLL.L.L.LLLLLLLLLLLLLL
LLLLLL.LLLLLL.LL.LLLLLLLLL.LLLLLLLLLL.LLLL.LL.LLLLLLLLLLL.LL.LLLLL.LLLLL.LLLLLLLLLL.LLLLLLLL
.LLL.......LL.LL....L..L.....LL.....L..L...LLL....L...L..LLL...L............LLLL.LL.......L.
LLLLL.L.LLLLLLLLLLLLLLLLLLLLL.L.LLLLLLLLLLLLLL.LLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLL.LL.LLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLL
L.LLLLL...LLLLLLLLLLLLL.LLLLLLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL
LLLLLLLLLLLLLLLL.L.L.LLLLLLLL.LLLLLLL.LLLL.LLLLL.L.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL
LLL.LLLLLLLLLLLLLLLLLLL.LLL.LLLLLLLLLL.LLL.LLLLLL..LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL
L..L.LL...LLL.L...LLL....L.L.L.L.....LL..........LL...L.L.L.LLLL....L.....L....LLL......LLLL
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.L.LLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLL
LLLLLLL..LLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLL.LLLLLLL.LLLLLLLLLLLLLLLLLL.LLL.L.L.LL.LLLLLLLLLLL
LLLLLLLLLLLLLLLL.LLLL.L.LLLLL.LLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLLLL.LLLLLLLLLLLLLL
LLLLLLL.LLLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLL.L
LLLLLLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLLL.LLLL.LLL.LLL.LLLLLL.LLLLLLLL.LLLLLL.LLL.LLLLL.LLLLLLLL
LLLLLLL.LLLLLLLL.LLLLLL..LLLLLLLLLLLL.LLLL.L..L.LL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLLLL
LLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLL..LLLLLLLLLLLL.LLLLLLLLLL.LLLL.LLLLLL.LLLLLLLLL.LLLLLLLL
LLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.L.LLLLLLL.LLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLL
LLLLLL..LLLLLLLL.LLLLLLLLLLLL.LLLLLL..LLLL.LLLL.LL.L.LLLL.LLLL.LLL.LLLLLL.LLLLLLLLLLLL.LLLLL
........LL..LL..L............L..L.L..L....L.......LL...L......L....LLL..L.L......LL..LL.L.L.
LLLLLLL.LLLLLLLL.LLLLLLLLLLLL.LLLLLL..LLLL.LLLLLLL.LLL.LL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLL.LLLL
LLLLLL.LLLLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL
LLL.LLL.LLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLL..LLL.LLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL
LLLLLLL.LLLLLLLL.LLLL.L.LLLLL.LL.LLLL.LLLL.L.LLLLL.LL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL
LLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL..LLLL.LLLLLL.LLLLLLL.LLLLLL.LLLLLLLL.LLLLLLL.L.LLLLLLLL
LLLLLLL.LLLLL.LL.LLL.LL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLL.LLLL.LL.LLLLL
LLLLLLLLLL.LLLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLL.LL.LLLLLLLLLLLLL.LLLLLLLL
LLLL.L.L...L.......L..LL.LL.LL....LL..L.L.L......L...LLL..L.L.L...LLL...L.....L.LLLL........
.LLLLLL.L.LLLLLL.LLLLLLLLLLL..LLLLLLL.LLLL.LLLLLLL.LLLLLL.LLLLL.LLLLLLLLL.LLLL.LLLL.LLLLLLLL
LLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLLLL.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.
LLLLLLL.L.LLLLLLLLLLLLL.LLLLL.LLL.LLL.LLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLL.LL.L.LLLLLLLLLLLLLLLL
LLLLLLL.LLLLL.LL.LLLLLL.LLLLLLLLLLLLL.LLLL.LLLLLLLLLLL.LL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL
L.LLLLL.LLLLL.LLLLLLLLL.LLLLL..LLLLLL.LLLL.LLLLLLL.L.LLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLL.LL..
..L...L.L.......LL.LLL.LLL..L....L..L.L.L..L.L........L...L.LL.L.........LLLLL.L.LL.L...L.LL
LLLLLLL.LLLLL.LL.LLLLLL.LLLL..LLLLL.L.LL.LLLLLL.LL.LLLLLLLLLLLLLLL.LLL.LLLLLLLLLLLLLLLLLLLLL
LLLLLLL.L.LLLLLLLLLLLLL.LLLLL.LL.LLLLLLL.LLLLLLLLL.LLL.LL.LLLLLLLL.LLL.LL.LLLLLLLLL.LLLLLLLL
LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL..L.LLLLLLLLLLLL.LLLLLL.L.LLLLLL.LLLLLL.LLLLLLLLL.LLL.LLLL
.LLLLLL.LL.LL.LLLLLL.L..LLLLLLL.LLLLL.LLLL.LL.LL.L.LL.L.L.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLL..LLLLLLLL.LLL.LLLLLLLLLLLLLLLLLL..LLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLL
LLLLLLL.LLLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLL.LLLLLLL.LL.LL..LLLLLLLL.LLLLLLLLLLLLLLLL.LLL..LLL
LLLLLLLLL.LL.LLL.LLLLLLLLLLLLLLLLLLLL.LLL..LLLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLL
LLLLLLL.LLLL.LLLLLLLLLLL.LLLL.LLLLLLLLLL.L.LLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL
LLL......LL...L...L..LL..L..L......L...L.L..L.........L.LL.LL..L..L.L......L..L........L..L.
LL.LLLLLLLLLLLLL.LL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLL
LLLLLLLLLLLLLL.L.LLLLLLLLLLLL.LL.LLLL..LLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LL.LLLLLLLL
LLLLLLL.LLLLLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLLLLLLL.L.LLLLLL.LLLLLLLL..LLLLL.LLLLLLLLL.LLLLLLLL
LLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLL.LLL.LLLLLL.LL.LLLLLL.LLLLLLLL
LLLLLLLLLLLLLLLL.LLLLLL.LLL.L.LLLLLLL.LLLLLLLLLLLL.LLLLLLLLL.LLL.L.LLLLLL.LLLLLLLLLLLLLLLLLL
LLLLLLL.LLLLL.LL.LL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL
LLL.LLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLL.LLL.LLLLLLLLLLL.LLLLLLLLL.LLLLLLLL`;

const testInput = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`;

const initialPositionInfo = position => {
  return {
    'type': position == '.' ? 'floor' : 'seat',
    'state': position == '.' ? 'floor' : 'empty'
  }
}

const seats = text => text.split('\n').map(row => row.split('').map(initialPositionInfo));

const textRepresentation = someState => {
  let output = [];
  for (let row of someState) {
    output.push(row.map(spot => {
      switch(spot.state) {
        case 'empty':
          return 'L';
        case 'occupied':
          return '#';
        default:
          return '.';
      }   
    }))
  }
  return output.map(row => row.join('')).join('\n');
}

const nextState = (currentState) => {

  const neighbors = (row, col) => {
    let prevRow = Math.max(row-1,0);
    let nextRow = Math.min(row+1,currentState.length-1);
    let prevCol = Math.max(col-1,0);
    let nextCol = Math.min(col+1, currentState[0].length-1);

    let collection = [];
    for (let currentRow=prevRow; currentRow<=nextRow; currentRow++) {
      for (let currentCol=prevCol; currentCol<=nextCol; currentCol++) {
        if (currentRow != row || currentCol != col) {
          collection.push(currentState[currentRow][currentCol]);
        }
      }
    }
    return collection;
  }

  const visibleNeighbors = (row, col) => {
    let collection = [];

    const directions = ['W','E','N','S','NW','NE','SW','SE'];
    
    const nextCoords = (coords, dir) => {
      const [localRow, localCol] = coords;
      switch (dir) {
        case 'W':
          return [localRow,localCol-1];
        case 'E':
          return [localRow,localCol+1];
        case 'N':
          return [localRow-1,localCol];
        case 'S':
          return [localRow+1,localCol];
        case 'NW':
          return [localRow-1,localCol-1];
        case 'NE':
          return [localRow-1,localCol+1];
        case 'SW':
          return [localRow+1,localCol-1];
        case 'SE':
          return [localRow+1,localCol+1];
      }
    }

    for (let dir of directions) {
      // Set starting point
      let [currentRow, currentCol] = nextCoords([row, col], dir);

      while (currentCol >= 0 && currentCol <= currentState[row].length-1 && currentRow >= 0 && currentRow <= currentState.length-1) {
        let pos = currentState[currentRow][currentCol];
        if (pos.type == 'seat') {
          collection.push(pos);
          break;
        }
        [currentRow, currentCol] = nextCoords([currentRow, currentCol], dir);
      }
    }

    //#region Old implementation

    /*
    // Look left
    currentCol = col - 1;
    while (currentCol >= 0) {
      let pos = currentState[row][currentCol--];
      if (pos.type == 'seat') {
        collection.push(pos);
        break;
      }
    }

    // Look right
    currentCol = col + 1;
    while (currentCol <= currentState[row].length-1) {
      let pos = currentState[row][currentCol++];
      if (pos.type == 'seat') {
        collection.push(pos);
        break;
      }
    }

    // Look up
    currentRow = row - 1;
    while (currentRow >= 0) {
      let pos = currentState[currentRow--][col];
      if (pos.type == 'seat') {
        collection.push(pos);
        break;
      }
    }

    // Look down
    currentRow = row + 1;
    while (currentRow <= currentState.length-1) {
      let pos = currentState[currentRow++][col];
      if (pos.type == 'seat') {
        collection.push(pos);
        break;
      }
    }

    // Look up-left
    currentCol = col - 1;
    currentRow = row - 1;
    while (currentCol >= 0 && currentRow >= 0) {
      let pos = currentState[currentRow--][currentCol--];
      if (pos.type == 'seat') {
        collection.push(pos);
        break;
      }
    }

    // Look up-right
    currentCol = col + 1;
    currentRow = row - 1;
    while (currentCol <= currentState[row].length-1 && currentRow >= 0) {
      let pos = currentState[currentRow--][currentCol++];
      if (pos.type == 'seat') {
        collection.push(pos);
        break;
      }
    }

    // Look down-left
    currentCol = col - 1;
    currentRow = row + 1;
    while (currentRow <= currentState.length-1 && currentCol >= 0) {
      let pos = currentState[currentRow++][currentCol--];
      if (pos.type == 'seat') {
        collection.push(pos);
        break;
      }
    }

    // Look down-right
    currentCol = col + 1;
    currentRow = row + 1;
    while (currentRow <= currentState.length-1 && currentCol <= currentState[row].length-1) {
      let pos = currentState[currentRow++][currentCol++];
      if (pos.type == 'seat') {
        collection.push(pos);
        break;
      }
    }

    */

    //#endregion Old implementation

    return collection;
  }

  const numOccupiedNeighbors = seatNeighbors => {
    return seatNeighbors.filter(neighbor => neighbor.state == 'occupied').length;
  }

  const nextSeatState = (row, col) => {
    const currentSeat = currentState[row][col];
    if (currentSeat.type == 'floor') {
      return 'floor';
    }

    const occupiedSeatThreshold = 5; // was 4

    // const currentSeatNeighbors = neighbors(row, col);
    // const numOccupiedSeatNeighbors = numOccupiedNeighbors(currentSeatNeighbors);
    const currentVisibleSeatNeighbors = visibleNeighbors(row, col);
    const numOccupiedVisibleSeatNeighbors = numOccupiedNeighbors(currentVisibleSeatNeighbors);
    if (currentSeat.state == 'empty') {
      // return numOccupiedSeatNeighbors == 0 ? 'occupied' : 'empty';
      return numOccupiedVisibleSeatNeighbors == 0 ? 'occupied' : 'empty';
    }
    // return numOccupiedSeatNeighbors >= occupiedSeatThreshold ? 'empty' : 'occupied';
    return numOccupiedVisibleSeatNeighbors >= occupiedSeatThreshold ? 'empty' : 'occupied';
  }

  const stateCopy = () => {
    let copy = [];
    for (let row of currentState) {
      let copyRow = [];
      for (let pos of row) {
        copyRow.push(Object.assign({},pos));
      }
      copy.push(copyRow);
    }
    return copy;
  }

  const applyChanges = changes => {
    let copy = stateCopy();
    for (let change of changes) {
      copy[change.row][change.col].state = change.state;
    }
    return copy;
  }

  const getPendingChanges = () => {
    let pendingChanges = [];
    for (let row=0;row<currentState.length;row++) {
      for (let col=0;col<currentState[row].length;col++) {
        let nextCompareState = nextSeatState(row,col);
        if (nextCompareState != currentState[row][col].state) {
          pendingChanges.push({
            'row': row,
            'col': col,
            'state': nextCompareState
          });
        }
      }
    }
    return pendingChanges;
  }

  return applyChanges(getPendingChanges());

}

const statesAreEqual = (stateOne, stateTwo) => {
  return textRepresentation(stateOne) == textRepresentation(stateTwo);
}

const stableState = startState => {
  let currentState = startState;
  let followingState = nextState(startState);

  // For debugging
  let curText = textRepresentation(currentState);
  let nextText = textRepresentation(followingState);

  while (!statesAreEqual(currentState, followingState)) {
    currentState = followingState;
    followingState = nextState(currentState);
  }
  return followingState;
}

const countOccupiedSeats = someState => {
  return someState.flat().reduce((acc, pos) => acc + (pos.state == 'occupied' ? 1 : 0), 0);
}

const input = rawInput;
// const input = testInput;

const start = seats(input);

// console.log(textRepresentation(start),'\n');
console.log(`Starting state has ${countOccupiedSeats(start)} occupied seats\n\n`);

const lastState = stableState(start);
// console.log(textRepresentation(lastState), '\n');
console.log(`Stable state has ${countOccupiedSeats(lastState)} occupied seats`);