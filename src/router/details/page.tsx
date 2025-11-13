import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCityImageSrc, getCityBySlug } from '../../data/infoCity.ts'
import type { CityData } from '../../interface.ts'
import {DetailsContainer,DetailsMain,DetailsHeader,HeaderIcon,HeaderTitle,DetailsContent,CityImage,CityImageContainer,CityImageGradient,CityName,CityTitle,CityInfo,CitySubtitle,BackButton,DetailsBody} from './styles.ts'

export default function DetailsPage() {
    const { cityName } = useParams<{ cityName: string }>()
    const navigate = useNavigate()
    const [city, setCity] = useState<CityData | undefined>()
    
    useEffect(() => {
        if (cityName) {
            const cityData = getCityBySlug(cityName)
            if (cityData) {
                setCity(cityData)
            }
        }
    }, [cityName])

    function handleBack() {
        navigate('/')
    }

    if (!city) {
        return null
    }

    return (
        <DetailsContainer>
            <DetailsMain>
                <DetailsHeader>
                    <HeaderIcon src="/logo.svg" alt="icone do site semeando o futuro" />
                    <HeaderTitle>Semeando o Futuro</HeaderTitle>
                </DetailsHeader>
                <DetailsContent>
                    <CityImageContainer>
                        <CityImage src={getCityImageSrc(city.name)} alt={city.name} />
                        <CityImageGradient>
                            <CityName>{city.name}</CityName>
                            <CityTitle>{city.title}</CityTitle>
                        </CityImageGradient>
                    </CityImageContainer>
                    <DetailsBody>
                        <CityInfo>
                            <CitySubtitle>{city.subtitle}</CitySubtitle>
                        </CityInfo>
                        <BackButton onClick={handleBack}>Voltar</BackButton>
                    </DetailsBody>
                </DetailsContent>
            </DetailsMain>
        </DetailsContainer>
    )
}

