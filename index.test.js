const { getFinalPosition } = require('./utils/motion');


test('Final position is as expected for input: (2, 3, E) LFRFF', () => {
  const grid = {
    x: 4,
    y: 8
  };
  const positionAndCommand = '(2, 3, E) LFRFF';

  const finalPosition = getFinalPosition(grid, positionAndCommand);
  
  expect(finalPosition).toMatchObject({
    x: 4,
    y: 4,
    direction: 'E'
  });
});

test('Final position is as expected for input: (0, 2, N) FFFLFRFF', () => {
  const grid = {
    x: 4,
    y: 8
  };
  const positionAndCommand = '(0, 2, N) FFFLFRFF';

  const finalPosition = getFinalPosition(grid, positionAndCommand);
  expect(finalPosition).toMatchObject({
    x: 0,
    y: 5,
    direction: 'W'
  });
});

test('Final position is as expected for input: (2, 3, N) FLLFR', () => {
  const grid = {
    x: 4,
    y: 8
  };
  const positionAndCommand = '(2, 3, N) FLLFR';

  const finalPosition = getFinalPosition(grid, positionAndCommand);
  expect(finalPosition).toMatchObject({
    x: 2,
    y: 3,
    direction: 'W'
  });
});

test('Final position is as expected for input: (1, 0, S) FFRLF', () => {
  const grid = {
    x: 4,
    y: 8
  };
  const positionAndCommand = '(1, 0, S) FFRLF';

  const finalPosition = getFinalPosition(grid, positionAndCommand);
  expect(finalPosition).toMatchObject({
    x: 1,
    y: 0,
    direction: 'S'
  });
});
