const { fetchMyIp, fetchCoordsByIP } = require("./iss");

fetchMyIp((error, ip) => {
  error ? console.log("It didn't work", error) : console.log("Returned ip:", ip);
});

fetchCoordsByIP("67.71.216.6", (error, data) => {
  error ? console.log("It didn't work", error) : console.log("Returned coordinated:", data);
});