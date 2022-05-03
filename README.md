# Multiverse Mars Rover 
This project is a terminal based app built using Node.js. The interface should has the following features:

1. Fetch data from the above URL.
2. A map to be able to visualise all the boat ramps.
3. A data visualisation (e.g. a bar chart) of your choice that displays the number or ramps per construction material.
4. A data visualisation of your choice that displays the number of ramps per size category (values of `area` in 3 different ranges: `[0, 50)`, `[50, 200)`, and `[200, 526)`).
5. Zooming in the map should filter the visualised data to include only those ramps which are currently visible in the viewport.
6. Clicking on a data point on a visualisation should filter the ramps on the map to reflect the selected data.

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