const request = require('superagent-bluebird-promise');

import cities from "../../data/city-info.js"

export function getWeather(callback) {
  const requests = []
  for(var i = 0; i < cities.cities.length; i++) {
    var url = `http://api.openweathermap.org/data/2.5/forecast?q=${cities.cities[i].id}&APPID=5492d1e790780d7cea76a2f393fea2e8&units=metric`
    requests.push(request.get(url))
  }

  Promise.all(requests)
    .then(function (results) {
      const weatherData = []
      results.forEach(result => {
        weatherData.push({
          cityName: result.body.city.name,
          temp: result.body.list[0].main.temp,
          time: result.body.list[0].dt_txt
        })
      })
      callback(null, weatherData)
    })
    .catch(err => console.log(err))
}
