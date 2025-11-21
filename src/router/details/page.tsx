import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCityImageSrc, getCityBySlug } from '../../data/infoCity.ts'
import type { CityData } from '../../interface.ts'
import {DetailsContainer,DetailsMain,DetailsHeader,HeaderIcon,HeaderTitle,DetailsContent,CityImage,CityImageContainer,CityImageGradient,CityName,CityTitle,CityInfo,CitySubtitle,BackButton,DetailsBody,MoreInfoSection,MoreInfoTitle,StatsGrid,StatItem,StatLabel,StatValue,TabsContainer,TabButton} from './styles.ts'

export default function DetailsPage() {
    const { cityName } = useParams<{ cityName: string }>()
    const navigate = useNavigate()
    const [city, setCity] = useState<CityData | undefined>()
    const [activeTab, setActiveTab] = useState<'resumo' | 'mais-info'>('resumo')
    
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
                        <TabsContainer>
                            <TabButton 
                                $active={activeTab === 'resumo'} 
                                onClick={() => setActiveTab('resumo')}
                            >
                                Resumo
                            </TabButton>
                            <TabButton 
                                $active={activeTab === 'mais-info'} 
                                onClick={() => setActiveTab('mais-info')}
                            >
                                Mais Informações
                            </TabButton>
                        </TabsContainer>
                        
                        {activeTab === 'resumo' && (
                            <CityInfo>
                                <CitySubtitle>{city.subtitle}</CitySubtitle>
                            </CityInfo>
                        )}
                        
                        {activeTab === 'mais-info' && (
                            <MoreInfoSection>
                                <MoreInfoTitle>MAIS INFORMAÇÕES</MoreInfoTitle>
                                <StatsGrid>
                                    {city.stats?.habitantes && (
                                        <StatItem>
                                            <StatLabel>Qtd. Habitantes</StatLabel>
                                            <StatValue>{city.stats.habitantes.toLocaleString('pt-BR')}</StatValue>
                                        </StatItem>
                                    )}
                                    {city.stats?.ensinoMedio && (
                                        <StatItem>
                                            <StatLabel>E. Médio</StatLabel>
                                            <StatValue>{city.stats.ensinoMedio.toLocaleString('pt-BR')}</StatValue>
                                        </StatItem>
                                    )}
                                    {city.stats?.ensinoFundamental && (
                                        <StatItem>
                                            <StatLabel>E. Fundamental</StatLabel>
                                            <StatValue>{city.stats.ensinoFundamental.toLocaleString('pt-BR')}</StatValue>
                                        </StatItem>
                                    )}
                                    {city.stats?.qtdEscolas && (
                                        <StatItem>
                                            <StatLabel>Qtd. Escolas</StatLabel>
                                            <StatValue>{city.stats.qtdEscolas}</StatValue>
                                        </StatItem>
                                    )}
                                    {city.stats?.desigualdadeRenda && (
                                        <StatItem>
                                            <StatLabel>Desigualdade de Renda</StatLabel>
                                            <StatValue>{city.stats.desigualdadeRenda}</StatValue>
                                        </StatItem>
                                    )}
                                    {city.stats?.nivelEscolaridade && (
                                        <StatItem>
                                            <StatLabel>Nível de Escolaridade</StatLabel>
                                            <StatValue>{city.stats.nivelEscolaridade}</StatValue>
                                        </StatItem>
                                    )}
                                    {city.stats?.taxaAnalfabetismo && (
                                        <StatItem>
                                            <StatLabel>Taxa de Analfabetismo</StatLabel>
                                            <StatValue>{city.stats.taxaAnalfabetismo}</StatValue>
                                        </StatItem>
                                    )}
                                    {city.stats?.acessoInternet && (
                                        <StatItem>
                                            <StatLabel>Acesso à Internet</StatLabel>
                                            <StatValue>{city.stats.acessoInternet}</StatValue>
                                        </StatItem>
                                    )}
                                    {(!city.stats || Object.keys(city.stats).length === 0) && (
                                        <StatItem style={{gridColumn: '1 / -1'}}>
                                            <StatLabel>Informações adicionais</StatLabel>
                                            <StatValue style={{fontSize: '12pt', fontWeight: '400'}}>
                                                Dados estatísticos em atualização
                                            </StatValue>
                                        </StatItem>
                                    )}
                                </StatsGrid>
                            </MoreInfoSection>
                        )}
                        
                        <BackButton onClick={handleBack}>Voltar</BackButton>
                    </DetailsBody>
                </DetailsContent>
            </DetailsMain>
        </DetailsContainer>
    )
}

