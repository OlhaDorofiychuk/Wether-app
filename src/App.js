
import './App.css';
import { CurrentWeather } from './components/current-weather';
import { Search } from './components/search';

function App() {

  const handleOnSearchChange=(searchData)=>{
    console.log(searchData)
  }
  return (
    <div className="container">
      <header className="App-header">
        My Weather
      </header>
      <Search onSearch={handleOnSearchChange}/>
      <CurrentWeather />
    </div>
  );
}

export default App;
