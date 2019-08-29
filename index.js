const { nextISSTimesForMyLocation } = require("./iss");

// fetchMyIp((error, ip) => {
//   error ? console.log("It didn't work", error) : console.log("Returned ip:", ip);
// });

// fetchCoordsByIP("67.71.216.6", (error, coordinates) => {
//   error ? console.log("It didn't work", error) : console.log("Returned coordinates:", coordinates);
// });

// fetchISSFlyOverTimes({ latitude: '43.63190', longitude: '-79.37160' }, (error, passTimes) => {
//   error ? console.log("It didn't work", error) : console.log("Returned fly over times:", passTimes);
// });

const printPassTimes = (passTimes) => {
  for (let pass of passTimes) {
    const fullDate = new Date(pass.risetime * 1000).toISOString().slice(0, 19);
    const day = fullDate.slice(0, 10);
    const time = fullDate.slice(11, 19);
    const duration = pass.duration;
    console.log(`Next pass at ${time} on the ${day} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("it didn't work", error);
  }
  printPassTimes(passTimes);
});
