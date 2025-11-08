import type { CityData } from "../../interface"
import './styles.css'

export function MapPin({data,className,onClick}:{
    data:CityData,
    className:string,
    onClick :()=>any
}) {
    function setPulse(){
        
        const btnAll = document.querySelectorAll('.map-pin-b1')
        for (const item of btnAll) {
           item?.setAttribute("class","map-pin-b1")
           const itemChild = item?.querySelector(':last-child')
           itemChild?.setAttribute("style", "border-color: #06b5d4;")
        }
        const btnUnic = document.querySelector(`.${className.toLocaleLowerCase()}`)
        const map_pin_b1 = btnUnic?.querySelector(':last-child')
        map_pin_b1?.setAttribute("class","map-pin-b1 pulse")
        const map_pin_b2 = map_pin_b1?.querySelector(':last-child')
        map_pin_b2?.setAttribute("style", "border-color: #10B981;")
        onClick()
    }

    return(
         <button style={{
            position: "absolute",
            top:`${data.position.y}px`,
            left:`${data.position.x}px` 
        
         }} type="button"className={className.toLocaleLowerCase()}onClick={()=>setPulse()}>
            <div className='map-pin-b1'>
                <div className='map-pin-b2'>
                    <div className='map-pin-b3'>
                    </div>
                </div>
            </div>
         </button>
    )
}