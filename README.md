# Multiverse Mars Rover 
This project is a terminal based app built using Node.js. The interface should has the following features:
- The world should be modelled as a grid with size m x n 
- Your program should read the input, update the robots, and print out the final states of the robots 
- Each robot has a position (x, y), and an orientation (N, E, S, W) 
- Each robot can move forward one space (F), rotate left by 90 degrees (L), or rotate right by 90 degrees (R) 
- If a robot moves off the grid, it is marked as ‘lost’ and its last valid grid position and orientation is recorded 
- Going from x -> x + 1 is in the easterly direction, and y -> y + 1 is in the northerly direction. i.e. (0, 0) represents the south-west corner of the grid 


## Dependencies
This project has the following package dependencies:
- Node.js is required - for installation instructions please check out this [link](https://nodejs.dev/learn/how-to-install-nodejs)
- Jest - this is a javascript testing framework. Click [here](https://jestjs.io/) for more info.

## Getting started
1. Clone this repository 
```sh
git clone https://github.com/Mumtahin/multiverse-mars-robot.git
```
2. Open up the project's parent directory and run
```sh
npm install
``` 
3. Start the app
```sh
node index.js
``` 

To run local tests, run the following command:
```
npm run test
```

## Usage
When entering the following input:
```
4 8
(2, 3, E) LFRFF
(0, 2, N) FFFLFRFF
```

The output will be:
```
(4, 4, E)
(0, 4, W) LOST
```

When entering the following input:
```
4 8
(2, 3, N) FLLFR
(1, 0, S) FFRLF
```

The output will be:
```
(2, 3, W)
(1, 0, S) LOST
```

## Improvments
- Better terminal input parsing so the app can support and understand a wider range of inputs, and is able to forgive typos
- Error handling - the project lacks this and this will help the user understand an issue if something goes wrong
- More unit tests. Currently the unit tests only check for two use cases. There should be unit tests to actually parse the input, as well as more unit tests for the rover's movement.