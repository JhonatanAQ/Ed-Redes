import { useEffect, useState } from 'react'

import { getCitiesSortedAlphabetically}  from '../../data/infoCity.ts'
import type { CityData } from '../../interface.ts'
import { ScreenAboult } from '../../components/Aboult/page.tsx'
import { MapPin } from '../../components/MapPin/page.tsx'
import { CityList } from '../../components/CityList/page.tsx'
import {Home,Main,Header,HeaderIcon,HeaderTitle,ContentContainer,CityListWrapper,MapConteiner,Map,MapImg, MapPinLst, DebugInfo} from './styles.ts'

function HomePage() {
    const [aboutOpen,setAboutOpen] = useState<boolean>(false)
    const [city ,setCity] = useState<CityData>()
    const [cityData,setCityData] = useState<CityData[]>([])
    const [sortedCities,setSortedCities] = useState<CityData[]>([])
    const [isPulsing,setPulsing]= useState<string>('')
    const [debugMode, setDebugMode] = useState<boolean>(false)
    const [clickedPos, setClickedPos] = useState<{x:number, y:number} | null>(null)

    function pagebout(props:{id:number}) {
        if (!city || city.id !== props.id  ) {
            const data = cityData.find(iten=>iten.id === props.id)
            if (data) {
                setCity(data)
                setAboutOpen(true)
            } 
        }else{
            setAboutOpen(true)
        }
    }

    function handleCityClick(id:number) {
        pagebout({id})
    }

    function handleMapClick(e: React.MouseEvent<HTMLDivElement>) {
        if (!debugMode) return
        // Não processar se clicou em um pin
        if ((e.target as HTMLElement).closest('button')) return
        
        const mapElement = e.currentTarget.querySelector('[data-map-container]') || e.currentTarget
        const rect = mapElement.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        
        // Converter para coordenadas do SVG (984x690)
        const svgX = (x / rect.width) * 984
        const svgY = (y / rect.height) * 690
        
        setClickedPos({x: Math.round(svgX), y: Math.round(svgY)})
        console.log(`Coordenadas: {x: ${Math.round(svgX)}, y: ${Math.round(svgY)}}`)
    }

    useEffect(()=>{
        const cities = getCitiesSortedAlphabetically()
        setSortedCities(cities)
        setCityData(cities)
        
        // Ativar modo debug com Ctrl+D
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === 'd') {
                e.preventDefault()
                setDebugMode(prev => !prev)
            }
        }
        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [])
    
  return (
    <Home>
        <Main>
            <Header>
                <HeaderIcon src="/logo.svg" alt="icone do site semeando o futuro" />
                <HeaderTitle>Semeando o Futuro</HeaderTitle>
            </Header>
            <ContentContainer $aboutIsOpen={aboutOpen}>
                <CityListWrapper>
                    <CityList 
                        cities={sortedCities}
                        onCityClick={handleCityClick}
                        selectedCityId={city?.id}
                    />
                </CityListWrapper>
                <MapConteiner $aboutIsOpen={aboutOpen}>
                    <Map onClick={handleMapClick} style={{cursor: debugMode ? 'crosshair' : 'default'}} data-map-container>
                        {debugMode && (
                            <DebugInfo>
                                <div>🔧 Modo Debug Ativo (Ctrl+D para desativar)</div>
                                {clickedPos && (
                                    <div>📍 Última posição: x: {clickedPos.x}, y: {clickedPos.y}</div>
                                )}
                                <div>👆 Clique no mapa para obter coordenadas</div>
                                <div style={{marginTop: '0.5rem', fontSize: '10pt', color: '#ffffffb2'}}>
                                    Copie: {"{"}x: {clickedPos?.x || '?'}, y: {clickedPos?.y || '?'}{"}"}
                                </div>
                            </DebugInfo>
                        )}
                        <MapImg src="/map.svg" alt="mapa do paraná" />
                        <MapPinLst style={{pointerEvents: debugMode ? 'none' : 'auto'}}>
                            {cityData.map(cityItem =>       
                                <MapPin
                                    key={cityItem.id}
                                    data={cityItem}
                                    onClick={()=>!debugMode && pagebout({id:cityItem.id})}
                                    isPulsing={isPulsing}
                                    setPulse={(i)=>{setPulsing(i)}}
                                    className={`${cityItem.name}-${cityItem.id}`} 
                                />
                            )}
                        </MapPinLst>
                    </Map>
                </MapConteiner>
            </ContentContainer>
            {aboutOpen&&<ScreenAboult aboutIsOpen={aboutOpen} data={city} />}
        </Main>
    </Home>
  )
}
export default HomePage