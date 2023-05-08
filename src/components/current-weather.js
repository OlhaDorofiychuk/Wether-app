import "./current.css";

export const CurrentWeather = ({ data }) => {
   
  return (
    <div className="weather">
      <div className="top">
        <p className="city"> {data.city} </p>
        <p className="condition">{data.weather[0].description}</p>
        <img
          alt="weather"
          className="weather_icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="main"> 
        <p className="temprature">{Math.round(data.main.temp)}°C</p>
        <div className="detailed">
          <div className="parameter-row">
            <span><u>Details</u></span>
          </div>
          <div className="parameter-row">
            <span className="label">Feels like: </span>
            <span className="value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="label">Wind: </span>
            <span className="value">{data.wind.speed}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="label">Humidity: </span>
            <span className="value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="label">Atmosfere pressure: </span>
            <span className="value">{data.main.pressure}hPa</span>
          </div>
          <div className="parameter-row">
            <span className="label">Sunrise: </span>
            <span className="value">{new Date(data.sys.sunrise*1000).toLocaleTime}AM</span>
          </div>
          <div className="parameter-row">
            <span className="label">Sunset: </span>
            <span className="value">{data.sys.sunset*1000}PM</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};
