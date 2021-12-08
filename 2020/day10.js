const input = `99
128
154
160
61
107
75
38
15
11
129
94
157
84
121
14
119
48
30
10
55
108
74
104
91
45
134
109
164
66
146
44
116
89
79
32
149
1
136
58
96
7
60
23
31
3
65
110
90
37
43
115
122
52
113
123
161
50
95
150
120
101
126
151
114
127
73
82
162
140
51
144
36
4
163
85
42
59
67
64
86
49
2
145
135
22
24
33
137
16
27
70
133
130
20
21
83
143
100
41
76
17`;

const testInput = `16
10
15
5
1
11
7
19
6
12
4`;

const largerTestInput = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;

const newTestInput = `1
4
5
7
10
11
12
13`;

const sortedAdapterValues = text => text.split('\n').map(val => parseInt(val)).sort((a,b) => a-b);

const valuesToCheck = input;
// const valuesToCheck = testInput;

let currentValue = 0;
let oneJoltDifferences = 0;
let threeJoltDifferences = 0;

for (let nextValue of sortedAdapterValues(valuesToCheck)) {
  let difference = nextValue - currentValue;
  if (difference < 1 || difference > 3) {
    console.log(`Can't join adapters from ${currentValue} to ${nextValue}`);
    break;
  }
  if (difference == 1) {
    oneJoltDifferences += 1;
  } else if (difference == 3) {
    threeJoltDifferences += 1;
  }
  currentValue = nextValue;
}

threeJoltDifferences += 1; // For the device, always 3 above the last value

// console.log(oneJoltDifferences * threeJoltDifferences);

const pathedTree = text => {
  const adapterValues = sortedAdapterValues(text);
  const fullValues = [0,...adapterValues,adapterValues[adapterValues.length-1]+3];
  const tree = fullValues.map((val, idx, arr) => {
    const reachableValues = arr.slice(idx+1, idx + 4).filter(nextVal => nextVal - val <= 3);
    return {
      'val': val,
      'reachableValues': reachableValues
    }
  });
  return tree;
}

// const tree = pathedTree(valuesToCheck);
// console.log(tree);

const leadingPaths = text => {
  
  const incrementalPaths = [];
  
  const cumulativePaths = (index) => {
    const currValue = fullValues[index];
    let compareIndex = index - 1;
    let acc = 0;
    while (compareIndex >= 0 && currValue - fullValues[compareIndex] <= 3) {
      acc += incrementalPaths[compareIndex--];
    }
    return acc;
  }

  const adapterValues = sortedAdapterValues(text);
  const fullValues = [0,...adapterValues,adapterValues[adapterValues.length-1]+3];
  for (let idx=0; idx<fullValues.length; idx++) {
    if (idx <= 1) {
      incrementalPaths[idx] = 1;
    } else {
      incrementalPaths[idx] = cumulativePaths(idx);
    }
  }
  return incrementalPaths;
}

// const tree = pathedTree(valuesToCheck);
// console.log(tree);

// const targetValue = tree[tree.length-1].val;
// const collectedPaths = [];
// const visitedNodes = [];

// Depth-first search
const navigateToTarget = (node) => {

  for (let adjacent of node.reachableValues) {
    if (adjacent == targetValue) {
      collectedPaths.push([0,...visitedNodes, targetValue]);
    } else if (!visitedNodes.includes(adjacent)) {
      visitedNodes.push(adjacent);
      navigateToTarget(tree.find(el => el.val == adjacent));
      visitedNodes.pop();
    }
  }
}

// navigateToTarget(tree[0]);
// console.log(collectedPaths.length);

const countPossiblePaths = () => {
  const foundPaths = leadingPaths(largerTestInput);
  return foundPaths[foundPaths.length-1];
}

console.log(countPossiblePaths());