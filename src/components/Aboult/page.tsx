import type { CityData } from "../../interface";
import {AboultCity,CityHeader,CityImg,CityName,CityMain,CityImgGradient, CityTitle, CitySubTitle, Close, CloseIcon} from './styles'

export function ScreenAboult({data,aboutIsOpen}:{data:CityData,aboutIsOpen:boolean}|any) {
    const imgSrc = ()=>{
        if (data.name === "Curitiba") {
            const src= "./img-city/curitiba.jpg";
            return src ;
        }
        if (data.name === "Londrina") {
            const src = "./img-city/londrina.jpg";
            return src ; 
        }
        if (data.name === "Maringa") {
            const src="./img-city/maringa.jpg";
            return src  ;
        }
        return "./img-city/londrina.jpg";
    }
    return(
        <AboultCity $aboutIsOpen={aboutIsOpen}>
            <CityHeader>
                <CityImg src={imgSrc()}/>
                <CityImgGradient>
                    <CityName>{data.name}</CityName>
                    <CityTitle>{data.title}</CityTitle>
                </CityImgGradient>
            </CityHeader>
            <CityMain>
                <CitySubTitle>{data.subtitle}</CitySubTitle>
            </CityMain>
        </AboultCity>
    )
}