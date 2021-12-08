const input = ['.#.....#..#..#....##.........#.','...#...#.........#..#.#..#.....','#.#...#.#....#.....#..#..##..##','..#..#.#.#.....#..#..#..##.....','.#..........#....####..##.#..#.','....##.......#.#.....#.........','....#......#....####.#.##......','........##..........##......#..','.........#........##..#.#.....#','.#..##..........#..#...#..##.#.','........#........#.....#....#.#','..#.......#.###...#.......##...','.##..##.#...#........#.........','...#....#..#..#..##.......#..#.','.#.#.##.##..##..#.#.....#.....#','....#.........#........#....##.','........#........#....###.#..#.','........#....#......##.........','.###.##.#.............##.......','....#.........#...#.#.##..#....','#.............#.#.#.#..#..#..##','###...###.###..#........#......','##..#.....#....##..##..........','.......#...#....#...#...#.....#','...#......###...##.###...#...#.','#.......#...##..#.......#..#...','.....##....#....#..#..#.#.##..#','.........#....##.#.#..##.#.....','.....#......#.#.#.....#.....#..','..#..#...#.#...#.........##.#..','.....#..#.................#.#..','##.#....##........#......#.....','#..#...##...#.#.#..#...........','.#..####.....#......#.###......','.#.......##............#....#..','.#.........##..#.##...#.....###','....##.........#.#...####...##.','..#.......#......##.....#.#..#.','...##....#..#..##....##...#.#.#','.................#.............','...#.##..#.##..............#...','...#......#.........##........#','..#.#..##...#.......#.#........','.###.#.....#.##.##.#...#...#...','.....#.##.....#..#......#..#...','.....#.#...#........#..#..#..#.','#...#.##.#....#................','..#...#.#..#.....#.#.#.........','#.#.###...#.....##........##...','#..##.##....#..........##.#...#','...#..#.#.###...##......#.#....','.#..#........##...#......#.#.#.','##........###....#.#....#......','....#...........#.........#....','#.#....#..#.....#.#....#.....#.','........###.......#..#.#.#.#.#.','..#....#.....#...............##','.....#..##....#.#...####.......','.#..#.....#..#.....#....#....#.','..##....#...........#.#....#...','..#.#......#..#.#..#.....###.#.','...........................##..','##.....#....#......###.#...#..#','...#...#.........#..#..#....#..','....#####.#.#.#....#..#........','.##.#..#.#............###......','##.#...##...##....#...#...##...','..#.#.....#.......#..##..###.##','#..##...........#.##.....#.##..','#...#....#...#..##...#.#...#.#.','.#..#...........###...#.#...#..','.#.....#......#.#......#...#..#','.#...##.##...............#....#','..#.........#....#.............','.#..##..#.#................#...','..#.#.#.#.................#.#.#','...#..#.#..#.#......#........#.','##....#......###.#......#......','..#....##.....#..#........#....','.#.#....#...#.#.....###..#...#.','.#..#...##.....#.#...#.....#.#.','...#....#....##....##.....#....','.......#...#...##..#.#.......#.','.###..#..###.#.#.#.#.#.....##..','....#.#......###.#....#....#..#','##.....#.....##.#.....#....#...','......#...##...#..#.#.....#....','...#.........###.....#..##.....','....#...#..#....#..#.........##','.#........#..#.....#.##.#....#.','.......#......#.##...##.#..#...','#......#.......##..##..#.#.....','..#.##..........#.#..#......#..','#.....#.......#......#.........','...##......##...........#.#....','.#....#........#...#.#..#.....#','.#...#...##......##...##...##.#','.#.#.##.....##....#.#.#..#.....','...#..#........#.....#.#.#####.','#..#..#......#....##....##.....','.#.............#....###.##.#...','.#....#.......#.#.....#......##','#..#.#.#........#...#..#...#...','#.#.#.....#.......#.##..#.....#','..#....#.....#...##.#...##.....','......#..#.............###...#.','..#...#.#....###...#...........','.........#..#..#....#..#.......','#....#.....#..#....#.#..##.....','.#..#.#.....#...##.....##......','.....####..#..#......#....##..#','#.#....#....#.##.......#.#.....','....#.#.............##..#.#...#','....#.#.#.....##.....##..#...#.','.#..#...#....#...#.#....#...#..','.#..#.#.#.......#...#..........','...##..#..#...##.....#.......#.','..##...##.#..#.......#.........','.##.#.......##...#...#......#.#','##.#.#..#...#............#.....','..#.##...##..#....##..#......#.','...#..........#.....#.#........','...#..#..#.......#.#.....##....','##.............#.....#.##...#..','#.#......#........#...#.##..#.#','...#..#...##.#.#........#.#....','#.....##...........#....#......','...##....#..#.#...#........#...','..##..####..#..#...............','.#.#..#......#.##.........##.#.','.##....#...##.#...#..##..#.....','........#........#.###.#.#....#','......##...#......#..#..#......','..#.......#...#..##........#..#','.#....###..###....###...##.#.##','#.#....#..#.#...#.#...##...#...','..#..##......#..#......####....','.#....###.......#...##...#.....','...#....#..#.....#..#...####.#.','............#.####..##...#..##.','.#..#.......#....#...#......#.#','.......#.......#..#.#..........','...#.#............#..#......#..','..#...........#...##......#...#','...##......#.........#.#...#.##','.#..#..#..#......#...........#.','....#.....#.###........#.......','..##.#.#........#.#...##....#..','.#.#........##....#...#......#.','.......#.##..###...............','#..#...##.....##........##....#','...####........#...#.........##','...#..............##..#........','......#.....#....#.......#....#','..###......#..##.....##....##..','##...#.....#..#.#.#...#.....#..','...#....#............#.........','..#..##...#..#.........#.......','.#.#.#...##..........#..###....','.......##.#.#.#...#.#...#.....#','..#..#..#..#...###.....#.##....','.#.#.....#.....##.#..#...###..#','.........#..##......##...##.#.#','#.........##..#......#..#.#.#..','.#..##.#.##......##........#...','..#...#.....##..#......#.....##','.#..#...#......#..#...#.....##.','..#..##...#.....#.....#........','....##..#....#.#....#......#.#.','..#.......##..#..#.##.#..#...##','...#..........#...#..##........','..#............#.#......#......','.#...##.......#...#.#........#.','.#...#....#..#....#....#.#...#.','......#..#.#..#..............#.','.....#.##.#...............##.##','.#...............#.....#..#...#','.#..##.......#.#...#..#..#....#','..#..###.##........##..........','.#....#..##...#.#.........#....','.......#.....#....###...##.#.#.','##..#.#...##.##.##....##.#.###.','#.#...........#..#.#...........','....#..#..#..#...#....#.......#','........##....#..#......##.#...','.#.#..##...##...#....#..#.###..','#..##....#..#...#.......##.....','..###..#.###......#..####....#.','.....#..#........##.#..#.......','.#......##..............#.#.#..','..#.#.......##...#....#.#.###..','#..#..#...###..#...............','......#..#.....#..#..#...#.....','.#...#..........###..#..#.#....','.#......##..#......#.....###..#','.......#...#..#....###.....#...','#....#.......###.##.....##....#','..#.....#..##..#.........##....','.....##....#.#......#..........','....#...#...#......##.....##.#.','........#.#.#......#...........','.#....#...#...#....#.....#...#.','..............#..##.#.....###.#','.#......##.....##...#....#.....','.............#.##......#.....#.','.#....#.#............#.#..##...','.#...##.......#..#...##....#...','.#.....#..........#............','#.#.#........#.....#..#....##..','#....#.##......#...#...........','........#.##.....#...##.....#..','..#.##....#.##.#...#.#.#....#..','......#.......####......#.#...#','#...#.##.####......#.....##....','.#..#....#.......#...##.....#..','................#......#.##....','###...##..#.#..........#....#.#','#.#..#.....#..##.##.##...#...##','..#.......#.......#..##..#..##.','......#.##.......#..#.....#...#','.##..##..#.#.......#..#......#.','....##.#....#...##.#..#.....#.#','..#..#.........###.#...........','....#.......#....##......#....#','..........#...#......#....#...#','..#.#....###.....#..#.#.#..#...','.....#...##..#.##........####..','##.............#....##........#','..#..........#..##.#...........','##.#.......#.#....#......#.#...','........####.....##.#.........#','.....#...#.#.....#.##..##.#....','........#...#.#.#.#...#......#.','.#..#.#....#.#...##.....#..#...','.....#.#............#.#.#......','....##.#...#...#.##...##.......','.........#.##.....#.......#...#','...........###....#.#....#...#.','.#..#.###......#..#............','#...#..#......#.#...#......#...','..##.#.#........#........##..##','..#.#.##..##....#........#.#.#.','...#........###......#.#.....#.','#.#.#.##........#.#...#..#.....','#..#...............#...#.#...#.','.....##......#...#.....#..#....','............#...#...#.##.#....#','...#..#..#...##.#....#.#..#.#..','##.#..#..............##........','.#.#..#.#..#....##..#.#.##.##..','......######....##.....#.......','.#.......#..........#.#..#.#..#','..........#.#......#...##......','#..........#.#..#.............#','...#...#..#....................','....#...#.....#.....##.....#...','..#....##.....#..#......#......','.#.#.....#..##.##..........###.','.#.##....#....#....#....#...#..','..##.....................##.#..','.....#..##....#.#.....##..#....','.####...#...##..#.##...#..#....','.........#.#...#.......###.....','...#..#........#..#..##.....#..','..#....#....#....###.....#.....','......#....#..#.........#......','#.#...#..#..#.#...#..#.#......#','..........#..........#.#.##....','.#..###..##..#....#.#.....#..#.','.##......#..#.##...#.........#.','...##...#....#.........#..#....','....#..##........#.........#...','.........##....#...#.#.....#..#','.#..........##...#..#.#..##....','#.......#...#...#............#.','.....##.#.##.......#.......#...','...........#...#.....###.....#.','#..................#.##..##...#','.........##.............#...#.#','#.#.....##...#........###....##','...##..#.##.....###.....#......','..#...#.#..#......##.#.......#.','.........##.#...........###..#.','..#...#.....#...#.#.....#..#...','.....##..#...#.#.#....#.....###','..#.#....#..#..#..#....#.#...#.','........##....#......#....#..#.','.##..#.....#.#....#..#.###.....','..............##.........#.#.#.','.##....#.#..#..#...#..........#','.....##.......#....#..#......#.','...#.#....................#..##','#.##..#.#...#...#....#.#....##.','...#.#..#.###................#.','.....##..#.##.#.#.........#.#..','.................##..........#.','..#......#........#.#....#.....','#......##......#......###....#.','....##....#..#..####......#...#','.##.##.........#...#..#....#.#.','.#..#....##...##..#...........#','#...#......#...#...........#...','...#...####.............##..#..','.....#....##............##....#','......##.#...##...........#.#..','..#......##.....###.......#.###','...#...#......#...##.#........#','.#.........##.##......##.......','....................#....#....#','.#.#.#........##.#....#.....#..','#.#.....####..#.........#.#.#..','...####..#..............#.#....','....#.#....#..........#....#...','.#..#..#.#...#..#.#............','.#.#.......##........##.....#..','#.#.##..#.....##......##....#.#','......#...#...#...#......#.....','.........##..#.....#.####.#.#..','.....#....#.###...#.###.#..#..#','..#.#..#..#.......#.......##...','.....#.........#......##.#....#','..#.#.##....#.#...............#','.....#..#....##......##..###...'];

const firstRepetition = {r:3,d:1,s:1};

const treesEncountered = repetition => {
  let trees = 0;
  for (var row = repetition.s; row < input.length; row += repetition.d) {
    const pos = row * repetition.r;
    const pattern = input[row];
    if (pattern.charAt(pos % pattern.length) == '#') {
      trees += 1;
    }
  }
  return trees;
}


console.log(treesEncountered(firstRepetition));

const repetitions = [{r:1,d:1,s:1},{r:3,d:1,s:1},{r:5,d:1,s:1},{r:7,d:1,s:1},{r:1,d:2,s:2}];

let totalTreesEncountered = 1;

repetitions.forEach(rep => {
  totalTreesEncountered *= treesEncountered(rep);
});

console.log(totalTreesEncountered);