import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { cityApiOptions } from "../api"
import { cityOptionsURL } from "../api"

export const Search=({onSearch})=>{

    const [search, setSearch]=useState(null)
    const loadOptions=(inputValue) =>{
        return fetch(`${cityOptionsURL}/cities?minPopulation&namePrefix=${inputValue}`,
        cityApiOptions 
        )
        .then(response => response.json())
        .then(response => {
            return {
                options: response.data.map((city)=>{
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name},${city.countryCode}`,
        
                    }
                })
            }
        })
        
    }

    const handleOnChange =(searchData)=>{
        setSearch(searchData)
        onSearch(searchData)
    }
    return(
        <AsyncPaginate
        placeholder='Search for city'
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        />
    )
}