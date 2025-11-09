import type { CityData } from "../../interface";
import {AboultCity,AboultCityName} from './styles'

export function ScreenAboult({data,close,aboutIsOpen}:{data:CityData,close:()=>any,aboutIsOpen:boolean}|any) {
    
    return(
        <AboultCity $aboutIsOpen={aboutIsOpen}>
            <AboultCityName>{data.name}</AboultCityName>
            <button style={{
                color:"#fff",
                position:"fixed",
                top:"30px",
                right:"0px"
            }} type="button" onClick={()=>{close()}}>
                x
            </button>
        </AboultCity>
    )
}