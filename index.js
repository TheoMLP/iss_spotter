const { fetchMyIp, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

fetchMyIp((error, ip) => {
  error ? console.log("It didn't work", error) : console.log("Returned ip:", ip);
});

fetchCoordsByIP("67.71.216.6", (error, data) => {
  error ? console.log("It didn't work", error) : console.log("Returned coordinates:", data);
});

fetchISSFlyOverTimes({ latitude: '43.63190', longitude: '-79.37160' }, (error, data) => {
  error ? console.log("It didn't work", error) : console.log("Returned fly over times:", data);
});