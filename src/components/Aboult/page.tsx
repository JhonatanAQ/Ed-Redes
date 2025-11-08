import type { CityData } from "../../interface";
import './styles.css'

export function ScreenAboult({data}:{data:CityData}|any) {
    
    return(
        <div className='page-city-aboult' id='close'>
            <h1>{data.name}</h1>
        </div>
    )
}