
import './App.css';
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
    </div>
  );
}

export default App;
