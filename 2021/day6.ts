const day6TestInput = `3,4,3,1,2`;
const day6ParsedTestValues = day6TestInput.split(",").map(val => parseInt(val));

const day6TestInput18 = `6,0,6,4,5,6,0,1,1,2,6,0,1,1,1,2,2,3,3,4,6,7,8,8,8,8`;
const day6ParsedTestValues18 = day6TestInput18.split(",").map(val => parseInt(val));

const day6Input = `1,4,3,3,1,3,1,1,1,2,1,1,1,4,4,1,5,5,3,1,3,5,2,1,5,2,4,1,4,5,4,1,5,1,5,5,1,1,1,4,1,5,1,1,1,1,1,4,1,2,5,1,4,1,2,1,1,5,1,1,1,1,4,1,5,1,1,2,1,4,5,1,2,1,2,2,1,1,1,1,1,5,5,3,1,1,1,1,1,4,2,4,1,2,1,4,2,3,1,4,5,3,3,2,1,1,5,4,1,1,1,2,1,1,5,4,5,1,3,1,1,1,1,1,1,2,1,3,1,2,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,4,5,1,3,1,4,4,2,3,4,1,1,1,5,1,1,1,4,1,5,4,3,1,5,1,1,1,1,1,5,4,1,1,1,4,3,1,3,3,1,3,2,1,1,3,1,1,4,5,1,1,1,1,1,3,1,4,1,3,1,5,4,5,1,1,5,1,1,4,1,1,1,3,1,1,4,2,3,1,1,1,1,2,4,1,1,1,1,1,2,3,1,5,5,1,4,1,1,1,1,3,3,1,4,1,2,1,3,1,1,1,3,2,2,1,5,1,1,3,2,1,1,5,1,1,1,1,1,1,1,1,1,1,2,5,1,1,1,1,3,1,1,1,1,1,1,1,1,5,5,1`;
const day6ParsedValues = day6Input.split(",").map(val => parseInt(val));

function spawn(currentValues:number[]):number[] {
  let newValues = new Array<number>();
  let spawnerCount = currentValues[0];
  for (let i=1; i<9; i++) {
    newValues[i-1] = currentValues[i];
  }
  newValues[8] = currentValues[0];
  newValues[6] += spawnerCount;
  return newValues;
}

function spawnFor(numDays:number, initialValues:number[]):number[] {
  let newValues = initialValues;
  for (let i=1; i<=numDays; i++) {
    newValues = spawn(newValues);
  }
  return newValues;
}

function countPopulation(fishSchool:number[]):number {
  return fishSchool.reduce((prev, curr) => prev + curr, 0);
}

function transpose(fish:number[]):number[] {
  let result = new Array<number>(9).fill(0);
  for (let thisFish of fish) {
    result[thisFish] += 1;
  }
  return result;
}

let start = transpose(day6ParsedValues);
console.log(start);
let school = spawnFor(256, start);
console.log(countPopulation(school));
