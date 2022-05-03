var readline = require('readline');
const { getFinalPosition } = require('./utils/motion');

var input = [];

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.prompt();

rl.on('line', function (cmd) {
    input.push(cmd);
});

rl.on('close', function (cmd) {
  
  console.log('\n-----------');

  // 1. Process input
  const [xDim, yDim] = input[0].split(' ');

  for (let i = 1; i < input.length; i++) {
    const positionAndCommand = input[i];
    const grid = {
      x: parseInt(xDim),
      y: parseInt(yDim)
    };
    
    // 2. Compute final position
    getFinalPosition(grid, positionAndCommand);
  }

  process.exit(0);
});

// 4 8
// (2, 3, E) LFRFF
// (0, 2, N) FFLFRFF