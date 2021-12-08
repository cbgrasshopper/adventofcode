const rawInput = `1003055
37,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,433,x,x,x,x,x,x,x,23,x,x,x,x,x,x,x,x,17,x,19,x,x,x,x,x,x,x,x,x,29,x,593,x,x,x,x,x,x,x,x,x,x,x,x,13`;

const testInput = `939
7,13,x,x,59,x,31,19`;

const testInput2 = `input2
17,x,13,19`;
const testInput3 = `input3
67,7,59,61`;
const testInput4 = `input4
67,x,7,59,61`;
const testInput5 = `input5
67,7,x,59,61`;
const testInput6 = `input6
1789,37,47,1889`;

const input = rawInput;
// const input = testInput6;

// First puzzle
const earliestDeparture = parseInt(input.split('\n')[0]);
const availableBusIds = input.split('\n')[1].split(',').filter(id => id != 'x').map(id => parseInt(id));
const nextDepartures = availableBusIds.map(id => ({ 'id': id, 'dep': earliestDeparture + (id - (earliestDeparture % id)) })).sort((a, b) => a.dep - b.dep);

// console.log(nextDepartures);
// console.log((nextDepartures[0].dep - earliestDeparture) * nextDepartures[0].id);

// Second puzzle
const startOffset = BigInt('1000000000000000');
// const startOffset = BigInt('1000000000');
// const startOffset = BigInt('0');
const departurePlan = input.split('\n')[1].split(',').map(((id, idx) => ({ 'id': id, 'timeOffset': idx}))).filter(el => el.id != 'x').map(el => ({'id': BigInt(el.id), 'timeOffset': BigInt(el.timeOffset)}));
// console.log(departurePlan);

const initialDeparture = dep => {
  let updated = Object.assign(dep, {'nextDeparture': dep.id});
  updated.nextDeparture = startOffset + (updated.id - (startOffset % updated.id));
  return updated;
}

let departureSet = departurePlan.map(initialDeparture);

// console.log("Initial departure set: ", departureSet);

const ensureOrderedDeparture = () => {
  for (let idx=1; idx<departureSet.length; idx++) {
    while (departureSet[idx].nextDeparture <= departureSet[idx-1].nextDeparture) {
      departureSet[idx].nextDeparture += departureSet[idx].id;
    }
  }
}

const calculateNextOrderedDepartures = () => {
  departureSet[0].nextDeparture += departureSet[0].id;
  ensureOrderedDeparture();
}

const isSolved = () => {
  return departureSet.every((dep, idx, set) => dep.nextDeparture - set[0].nextDeparture == dep.timeOffset);
}

const findSolution = () => {
  let loops = 0;
  let maxLoops = Number.MAX_SAFE_INTEGER;
  while (!isSolved() && ++loops < maxLoops) {
    calculateNextOrderedDepartures();
  }
  if (isSolved()) {
    console.log(`Solution: t=${departureSet[0].nextDeparture}`);
  } else {
    console.log(`No solution found after ${loops} calculations\n\nState:\n`);
  }
  console.log(departureSet);
}

const modIsSolved = ts => {
  return departureSet.every(dep => ((ts+dep.timeOffset) % dep.id == BigInt(0)));
}

const modSolution = () => {
  let ts = departureSet[0].nextDeparture;
  let loops = 0;
  let maxLoops = Number.MAX_SAFE_INTEGER;
  while (!modIsSolved(ts) && ++loops < maxLoops) {
    ts += departureSet[0].id;
  }
  if (modIsSolved(ts)) {
    departureSet[0].nextDeparture = ts;
    ensureOrderedDeparture();
    console.log(`Solution: t=${departureSet[0].nextDeparture}`);
  } else {
    console.log(`No solution found after ${loops} calculations\n\nState:\n`);
  }
  console.log(departureSet);
}

console.log(departureSet);

ensureOrderedDeparture();

console.log(departureSet);

// while (departureSet[0].nextDeparture < 3390) {
//   calculateNextOrderedDepartures();
// }
// console.log(departureSet);

// calculateNextOrderedDepartures();
// console.log(departureSet);

// findSolution();

modSolution();