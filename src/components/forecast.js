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
                    <label className="day"></label>

                </div>
                </AccordionItemButton></AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
            </AccordionItem>
        ))}

    </Accordion>
    </>
    )
}