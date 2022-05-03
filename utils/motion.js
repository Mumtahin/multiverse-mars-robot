const { removeNonAlphanumericChars } = require('./data');

const allowedDirections = ['N', 'E', 'S', 'W'];

const computeFinalPosition = (grid, initialPosition, movementCommands) => {
  // position = {x, y, direction}
  const newPosition = {...initialPosition};

  let isValidPosition = true;
  movementCommands.split('').forEach(movementCommand => {
    if (isValidPosition) {
      if (movementCommand === 'L') {
        newPosition.direction = getDirection(newPosition.direction, 'left');
      } else if (movementCommand === 'R') {
        newPosition.direction = getDirection(newPosition.direction, 'right');
      } else if (movementCommand === 'F') {
        const updatedPosition = moveForward(newPosition);
        isValidPosition = isPositionValid(grid, updatedPosition);

        if (isValidPosition) {
          newPosition.x = updatedPosition.x;
          newPosition.y = updatedPosition.y;
        }
      }
    }
  });

  const outcome = isValidPosition ? '' : 'LOST';
  console.log(`(${newPosition.x}, ${newPosition.y}, ${newPosition.direction}) ${outcome}`);
  return newPosition;
}

const isPositionValid = (grid, newPosition) => {
  if (newPosition.x < 0 || newPosition.y < 0) {
    return false;
  } else {
    return ((grid.x - newPosition.x) >= 0 && (grid.y - newPosition.y) >= 0);
  }
};

const getDirection = (initialDirection, turnDirection) => {
  const allowedDirectionsIndex = allowedDirections.findIndex(direction => direction == initialDirection);
  return turnDirection === 'left' 
    ? getLeftDirection(allowedDirectionsIndex)
    : getRightDirection(allowedDirectionsIndex);
}

const getLeftDirection = (allowedDirectionsIndex) => allowedDirectionsIndex === 0 
  ? allowedDirections[3]
  : allowedDirections[allowedDirectionsIndex - 1];

const getRightDirection = (allowedDirectionsIndex) => allowedDirectionsIndex === 3
  ? allowedDirections[0]
  : allowedDirections[allowedDirectionsIndex + 1];

const moveForward = (position) => {
  switch (position.direction) {
    case 'N':
      return {x: position.x, y: position.y + 1};
    case 'E':
      return {x: position.x + 1, y: position.y};
    case 'S':
      return {x: position.x, y: position.y - 1};
    case 'W':
      return {x: position.x - 1, y: position.y};
  };

}

const getFinalPosition = (grid, command) => {
  const [initialPosition, movementCommands] = command.split(') ');
  const [x, y, direction] = initialPosition.split(',').map(initialPositionData => removeNonAlphanumericChars(initialPositionData));

  if (x) {
    const currentPosition = {
      x: parseInt(x), 
      y: parseInt(y), 
      direction
    };

    const finalPosition = computeFinalPosition(grid, currentPosition, movementCommands);
    return finalPosition;
  }
}

module.exports = {
  getFinalPosition,
  computeFinalPosition
}