function seed(a, b, c) {
  return [...arguments];
}

function same([x, y], [j, k]) {
  return x === j && y === k;
}

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {
  return this.some((c) => same(c, cell));
}

const printCell = (cell, state) => {
  return contains.call(state, cell) ? "\u25A3" : "\u25A2";
};

const corners = (state = []) => {
  if (state.length === 0) {
    return {
      topRight: [0, 0],
      bottomLeft: [0, 0],
    };
  }
  let maxFirst = state[0][0];
  let maxLast = state[0][1];
  let minFirst = state[0][0];
  let minLast = state[0][1];
  state.forEach((arr) => {
    if (maxFirst < arr[0]) maxFirst = arr[0];
    if (maxLast < arr[1]) maxLast = arr[1];
    if (minFirst > arr[0]) minFirst = arr[0];
    if (minLast > arr[1]) minLast = arr[1];
  });

  return {
    topRight: [maxFirst, maxLast],
    bottomLeft: [minFirst, minLast],
  };
};

const printCells = (state) => {
  const { topRight, bottomLeft } = corners(state);
  let cellsToPrint = "";

  for (let row = bottomLeft[1]; row <= topRight[1]; row++) {
    let rowToPrint = "";
    for (let coll = bottomLeft[0]; coll <= topRight[0]; coll++) {
      rowToPrint += printCell([coll, row], state);
    }
    cellsToPrint = rowToPrint + "\n" + cellsToPrint;
  }

  return cellsToPrint;
};

const getNeighborsOf = ([x, y]) => {
  return [
    [x - 1, y - 1],
    [x, y - 1],
    [x + 1, y - 1],
    [x - 1, y],
    [x + 1, y],
    [x - 1, y + 1],
    [x, y + 1],
    [x + 1, y + 1],
  ];
};

const getLivingNeighbors = (cell, state) => {};

const willBeAlive = (cell, state) => {};

const calculateNext = (state) => {};

const iterate = (state, iterations) => {};

const main = (pattern, iterations) => {};

const startPatterns = {
  rpentomino: [
    [3, 2],
    [2, 3],
    [3, 3],
    [3, 4],
    [4, 4],
  ],
  glider: [
    [-2, -2],
    [-1, -2],
    [-2, -1],
    [-1, -1],
    [1, 1],
    [2, 1],
    [3, 1],
    [3, 2],
    [2, 3],
  ],
  square: [
    [1, 1],
    [2, 1],
    [1, 2],
    [2, 2],
  ],
};

const [pattern, iterations] = process.argv.slice(2);
const runAsScript = require.main === module;

if (runAsScript) {
  if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
    main(pattern, parseInt(iterations));
  } else {
    console.log("Usage: node js/gameoflife.js rpentomino 50");
  }
}

exports.seed = seed;
exports.same = same;
exports.contains = contains;
exports.getNeighborsOf = getNeighborsOf;
exports.getLivingNeighbors = getLivingNeighbors;
exports.willBeAlive = willBeAlive;
exports.corners = corners;
exports.calculateNext = calculateNext;
exports.printCell = printCell;
exports.printCells = printCells;
exports.startPatterns = startPatterns;
exports.iterate = iterate;
exports.main = main;
