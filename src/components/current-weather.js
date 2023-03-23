import './current.css'

export const CurrentWeather=({data})=>{
    return(
        <div className='weather'>
            <div className='city'>
                <p className='city'> {data.city}</p>
                <p className='condition'>{data.weather[0].description}</p>
                <img alt='weather' className='weather_icon' src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className='detailed'>
                <p className='temprature'>{Math.round(data.main.temp)}*C</p>
                <div>
                    <span>Details</span>
                    </div>
                    <div>
                    <span className='label'>Feels like</span>
                    <span className='value'>{Math.round(data.main.feels_like)}*C</span>
                    </div>
                    <div>
                    <span className='label'>Wind</span>
                    <span className='value'>{data.wind.speed}</span>
                    </div>
                    <div>
                    <span className='label'>Humidity</span>
                    <span className='value'>{data.main.humidity}</span>
                    </div>
                    <div>
                    <span className='label'>Atmosfere pressure</span>
                    <span className='value'>12</span>
                    </div>

            </div>

        </div>
    )
    }