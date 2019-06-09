const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/3f25d53570e8c86aa98746bdfde201d2/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude);

  request({
    url,
    json: true
  }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services!');
    } else if (body.error) {
      callback('Unable to find coordinates.');
    } else {
      callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.');
    }
  });
}

module.exports = forecast;