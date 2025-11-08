import type { CityData } from "../../interface";
import './styles.css'

export function ScreenAboult({data,close}:{data:CityData,close:()=>any}|any) {
    
    return(
        <div className='page-city-aboult' id='close'>
            <h1>{data.name}</h1>
            <button style={{
                color:"#fff",
                position:"fixed",
                top:"30px",
                right:"0px"
            }} type="button" onClick={()=>{close()}}>
                x
            </button>
        </div>
    )
}