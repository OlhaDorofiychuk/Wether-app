import { Accordion, AccordionItem, AccordionItemHeading,AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion"


export const Forecast =({data})=>{
    return (
    <>
    <label className="title">Daily</label>
    <Accordion allowMultipleExpanded>
        {data.list.splice(0,7).map((item,index)=>(
            <AccordionItem key={index}>
            <AccordionItemHeading><AccordionItemButton>'day'
                </AccordionItemButton></AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
            </AccordionItem>
        ))}

    </Accordion>
    </>
    )
}