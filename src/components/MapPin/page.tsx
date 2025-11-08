import type { CityData } from "../../interface"
import './styles.css'

export function MapPin({data,className,onClick}:{
    data:CityData,
    className:string,
    onClick :()=>any
}) {
    return(
         <button style={{
            position: "absolute",
            top:`${data.position.y}px`,
            left:`${data.position.x}px` 
        
         }} type="button"className={className.toLocaleLowerCase()}onClick={()=>onClick()}>
            <div className='map-pin-b1'>
                <div className='map-pin-b2'>
                    <div className='map-pin-b3'>
                    </div>
                </div>
            </div>
         </button>
    )
}