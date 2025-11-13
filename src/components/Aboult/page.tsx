import { useNavigate } from 'react-router-dom'
import type { CityData } from "../../interface";
import { getCityImageSrc, getCitySlug } from '../../data/infoCity.ts'
import {AboultCity,CityHeader,CityImg,CityName,CityMain,CityImgGradient, CityTitle, CitySubTitle, DetailsButton} from './styles'

export function ScreenAboult({data,aboutIsOpen}:{data:CityData,aboutIsOpen:boolean}|any) {
    const navigate = useNavigate()

    function handleDetails() {
        navigate(`/details/${getCitySlug(data.name)}`)
    }

    return(
        <AboultCity $aboutIsOpen={aboutIsOpen}>
            <CityHeader>
                <CityImg src={getCityImageSrc(data.name)}/>
                <CityImgGradient>
                    <CityName>{data.name}</CityName>
                    <CityTitle>{data.title}</CityTitle>
                </CityImgGradient>
            </CityHeader>
            <CityMain>
                <CitySubTitle>{data.subtitle}</CitySubTitle>
                <DetailsButton onClick={handleDetails}>Ver mais detalhes</DetailsButton>
            </CityMain>
        </AboultCity>
    )
}