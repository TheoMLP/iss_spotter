const request = require('request-promise-native');

const fetchMyIp = () => {
  return request("https://api.ipify.org?format=json")
}

const fetchCoordsByIp = (body) => {
  const ip = JSON.parse(body).ip;
  return request(`https://ipvigilante.com/${ip}`);
}

const fetchISSFlyOverTimes = (coordinates) => {
  return request(`http://api.open-notify.org/iss-pass.json?lat=${JSON.parse(coordinates).data.latitude}&lon=${JSON.parse(coordinates).data.longitude}`)
}

const nextISSTimesForMyLocation = () => {
  return fetchMyIp()
  .then(fetchCoordsByIp)
  .then(fetchISSFlyOverTimes)
  .then((passTimes) => {
    const response = (JSON.parse(passTimes).response)
    return response
  })
}
module.exports = { nextISSTimesForMyLocation }