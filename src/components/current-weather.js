import './current.css'

export const CurrentWeather=()=>{
    return(
        <div className='weather'>
            <div className='city'>
                <p className='city'> City</p>
                <p className='condition'>sunny</p>
                <img alt='weather' className='weather_icon' src='' />
            </div>
            <div className='detailed'>
                <p className='temprature'>18*</p>
                <div>
                    <span>Details</span>
                    </div>
                    <div>
                    <span className='label'>Feels like</span>
                    <span className='value'>22*</span>
                    </div>
                    <div>
                    <span className='label'>Wind</span>
                    <span className='value'>134m/s</span>
                    </div>
                    <div>
                    <span className='label'>Humidity</span>
                    <span className='value'>44*</span>
                    </div>
                    <div>
                    <span className='label'>Atmosfere pressure</span>
                    <span className='value'>12</span>
                    </div>

            </div>

        </div>
    )
    }