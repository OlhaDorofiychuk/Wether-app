
import { useState } from 'react';
import { WeatherAPIKey, WeatherURL } from './api';
import './App.css';
import { CurrentWeather } from './components/current-weather';
import { Search } from './components/search';
import { Forecast } from './components/forecast';

function App() {
  const [currentWeather, setCurrentWeather]=useState(null)
  const [forecastWeather, setForecastWeather]=useState(null)

  const handleOnSearchChange=(searchData)=>{
    const [lat, lon]=searchData.value.split(' ')

    const currentWeatherFetch = fetch(`${WeatherURL}/weather?lat=${lat}&lon=${lon}&appid=${WeatherAPIKey}&units=metric`)
    const forecastFetch = fetch(`${WeatherURL}/forecast?lat=${lat}&lon=${lon}&appid=${WeatherAPIKey}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async(res)=>{
      const currentRes = await res[0].json();
      const forecastRes = await res[1].json();

      setCurrentWeather({city:searchData.label, ...currentRes})
      setForecastWeather({city:searchData.label, ...forecastRes})
    })
    // .catch((err)=>console.log(err))
  }

  return (
    <div className="container">
      <header className="App-header">
        My Weather
      </header>
      <Search onSearch={handleOnSearchChange}/>
      {currentWeather&&<CurrentWeather data= {currentWeather}/>}
     {forecastWeather &&<Forecast data={forecastWeather} />}
    </div>
  );
}

export default App;
