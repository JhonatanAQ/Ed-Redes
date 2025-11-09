import { useEffect, useState } from "react"
import type { CityData } from "../../interface"
import {MapPinB,MapPin1,MapPin2,MapPin3} from "./styles"

export function MapPin({data,className,onClick,isPulsing,setPulse}:{
    data:CityData,
    className:string,
    isPulsing:string,
    setPulse:(i:string)=>any,
    onClick :()=>any
}) {
    const [pulsing,setPulsing]= useState(false)

    function onPulse(){
        if (isPulsing !== data.name) {setPulse(data.name)}
       
        onClick();
    }
    useEffect(()=>{
        if (isPulsing === data.name) {
            setPulsing(true)
        }else{
            setPulsing(false)
        }
    })

    return(
         <MapPinB $position={data.position} className={className.toLocaleLowerCase()}onClick={()=>{onPulse()}}>
            <MapPin1 $isPulsing={pulsing}>
                <MapPin2>
                    <MapPin3>
                    </MapPin3>
                </MapPin2>
            </MapPin1>
         </MapPinB>
    )
}