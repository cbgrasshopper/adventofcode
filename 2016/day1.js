const input = ['R4','R3','L3','L2','L1','R1','L1','R2','R3','L5','L5','R4','L4','R2','R4','L3','R3','L3','R3','R4','R2','L1','R2','L3','L2','L1','R3','R5','L1','L4','R2','L4','R3','R1','R2','L5','R2','L189','R5','L5','R52','R3','L1','R4','R5','R1','R4','L1','L3','R2','L2','L3','R4','R3','L2','L5','R4','R5','L2','R2','L1','L3','R3','L4','R4','R5','L1','L1','R3','L5','L2','R76','R2','R2','L1','L3','R189','L3','L4','L1','L3','R5','R4','L1','R1','L1','L1','R2','L4','R2','L5','L5','L5','R2','L4','L5','R4','R4','R5','L5','R3','L1','L3','L1','L1','L3','L4','R5','L3','R5','R3','R3','L5','L5','R3','R4','L3','R3','R1','R3','R2','R2','L1','R1','L3','L3','L3','L1','R2','L1','R4','R4','L1','L1','R3','R3','R4','R1','L5','L2','R2','R3','R2','L3','R4','L5','R1','R4','R5','R4','L4','R1','L3','R1','R3','L2','L3','R1','L2','R3','L3','L1','L3','R4','L4','L5','R3','R5','R4','R1','L2','R3','R5','L5','L4','L1','L1'];
const directionFor = (previous, turn) => {
  switch (previous) {
    case 'E':
      return turn == 'R' ? 'S' : 'N';
    case 'S':
      return turn == 'R' ? 'W' : 'E';
    case 'W':
      return turn == 'R' ? 'N' : 'S';
    case 'N':
    default:
        return turn == 'R' ? 'E' : 'W';
  }
}

const absoluteDistance = list => {
  let currentX = 0;
  let currentY = 0;
  let direction = 'N';
  list.forEach(instruction => {
    direction = directionFor(direction, instruction.charAt(0));
    const distance = parseInt(instruction.replaceAll(/[RL]/g, ''));
    switch(direction) {
      case 'N':
        currentY += distance;
        break;
      case 'E':
        currentX += distance;
        break;
      case 'S':
        currentY -= distance;
        break;
      case 'W':
        currentX -= distance;
        break;
      default:
        console.log(`Unexpected direction ${direction} encountered`);
    }
  });
  return Math.abs(currentX) + Math.abs(currentY);
}

const distanceToFirstRevisitedPoint = list => {
  let currentX = 0;
  let currentY = 0;
  let direction = 'N';
  let visitedPoints = new Set();
  visitedPoints.add('0.0');
  for (let instruction of list) {
    direction = directionFor(direction, instruction.charAt(0));
    const distance = parseInt(instruction.replaceAll(/[RL]/g, ''));
    switch(direction) {
      case 'N':
        for (let offset=currentY+1; offset<=currentY+distance; offset++) {
          let newPoint = `${currentX}/${offset}`;
          if (visitedPoints.has(newPoint)) {
            return Math.abs(currentX) + Math.abs(offset);
          }
          visitedPoints.add(newPoint);
        }
        currentY += distance;
        break;
      case 'E':
        for (let offset=currentX+1; offset<=currentX+distance; offset++) {
          let newPoint = `${offset}/${currentY}`;
          if (visitedPoints.has(newPoint)) {
            return Math.abs(offset) + Math.abs(currentY);
          }
          visitedPoints.add(newPoint);
        }
        currentX += distance;
        break;
      case 'S':
        for (let offset=currentY-1; offset>=currentY-distance; offset--) {
          let newPoint = `${currentX}/${offset}`;
          if (visitedPoints.has(newPoint)) {
            return Math.abs(currentX) + Math.abs(offset);
          }
          visitedPoints.add(newPoint);
        }
        currentY -= distance;
        break;
      case 'W':
        for (let offset=currentX-1; offset>=currentX-distance; offset--) {
          let newPoint = `${offset}/${currentY}`;
          if (visitedPoints.has(newPoint)) {
            return Math.abs(offset) + Math.abs(currentY);
          }
          visitedPoints.add(newPoint);
        }
        currentX -= distance;
        break;
      default:
        console.log(`Unexpected direction ${direction} encountered`);
    }
    if (visitedPoints.has(`${currentX}.${currentY}`)) {
      return Math.abs(currentX) + Math.abs(currentY);
    }
    visitedPoints.add(`${currentX}.${currentY}`);
  };
  return Math.abs(currentX) + Math.abs(currentY);
}

// First instructions
// console.log(`Easter HQ is ${absoluteDistance(input)} blocks away`);

// Second instructions
console.log(`Easter HQ is ${distanceToFirstRevisitedPoint(input)} blocks away`);