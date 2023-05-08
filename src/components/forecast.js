import "./forecast.css"
import { Accordion, AccordionItem, AccordionItemHeading,AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion"

const weekDays=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
export const Forecast =({data})=>{
    const dayOfTheWeek = new Date().getDay()
    const forecastWeek= weekDays.slice(dayOfTheWeek, weekDays.length).concat(weekDays.slice(0,dayOfTheWeek))
    console.log(forecastWeek)
    return (
    <>
    <label className="title">Daily</label>
    <Accordion allowMultipleExpanded>
        {data.list.splice(0,7).map((item,index)=>(
            <AccordionItem key={index}>
            <AccordionItemHeading><AccordionItemButton>
                <div className="daily-item">
                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                    <label className="day">{forecastWeek[index]}</label>
                    <label className="description">{item.weather[0].description}</label>
                    <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>

                </div>
                </AccordionItemButton></AccordionItemHeading>
            <AccordionItemPanel>
                <div className="daily-details-container">
                    <div className="daily-details-container-item">
                        <label>Pressure</label>
                        <label>{item.main.pressure}</label>
                    </div>
                </div>
            </AccordionItemPanel>
            </AccordionItem>
        ))}

    </Accordion>
    </>
    )
}