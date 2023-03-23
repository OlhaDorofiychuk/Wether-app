
import { useState } from 'react';
import { WeatherAPIKey, WeatherURL } from './api';
import './App.css';
import { CurrentWeather } from './components/current-weather';
import { Search } from './components/search';

function App() {
  const [currentWeather, setCurrentWeather]=useState(null)
  const [forcastWeather, setForcastWeather]=useState(null)

  const handleOnSearchChange=(searchData)=>{
    const [lat, lon]=searchData.value.split(' ')

    const currentWeatherFetch = fetch(`${WeatherURL}/weather?lat=${lat}&lon=${lon}&appid=${WeatherAPIKey}&units=metric`)
    const forcastFetch = fetch(`${WeatherURL}/forecast?lat=${lat}&lon=${lon}&appid=${WeatherAPIKey}&units=metric`)

    Promise.all([currentWeatherFetch, forcastFetch])
    .then(async(res)=>{
      const currentRes = await res[0].json();
      const forcastRes = await res[1].json();

      setCurrentWeather({city:searchData.label, ...currentRes})
      setForcastWeather({city:searchData.label, ...forcastRes})
    })
    .catch((err)=>console.log(err))
  }

  console.log(currentWeather)
  console.log(forcastWeather)
  return (
    <div className="container">
      <header className="App-header">
        My Weather
      </header>
      <Search onSearch={handleOnSearchChange}/>
      {currentWeather&&<CurrentWeather data= {currentWeather}/>}
    </div>
  );
}

export default App;
