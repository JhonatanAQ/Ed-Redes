import { useEffect, useState } from 'react'

import { cityDateJSON}  from '../data/infoCity.ts'
import type { CityData } from '../interface.ts'
import { ScreenAboult } from '../components/Aboult/page.tsx'
import { MapPin } from '../components/MapPin/page.tsx'
import {Home,Main,Header,HeaderIcon,HeaderTitle,Map,MapImg, MapConteiner, MapPinLst} from './styles.ts'
function HomePage() {
    const [aboutOpen,setAboutOpen] = useState<boolean>(false)
    const [city ,setCity] = useState<CityData>()
    const [cityData,setCityData] = useState<CityData[]>([])
    const [isPulsing,setPulsing]= useState<string>('')

    function pagebout(props:{id:number}) {

        if (!city || city.id !== props.id  ) {
            const data = cityData.find(iten=>iten.id === props.id)
            if (data) {
                setCity(data)
                setAboutOpen(true)
            } 
        }
    }
    useEffect(()=>{
        if (cityDateJSON) {
            setCityData(cityDateJSON)
        }
    })
  return (
    <Home>
        <Main>
            <Header>
                <HeaderIcon src="./logo.svg" alt="icone do site semeando o futuro" />
                <HeaderTitle>Semeando o Futuro</HeaderTitle>
            </Header>
            <MapConteiner $aboutIsOpen={aboutOpen}>
                <Map>
                    <MapImg src="./map.svg" alt="mapa do paraná" />
                    <MapPinLst>
                        {cityData.map(cityItem =>       
                            <MapPin
                                key={cityItem.id}
                                data={cityItem}
                                onClick={()=>pagebout({id:cityItem.id})}
                                isPulsing={isPulsing}
                                setPulse={(i)=>{setPulsing(i)}}
                                className={`${cityItem.name}-${cityItem.id}`} 
                            />
                        )}
                    </MapPinLst>
                </Map>
            </MapConteiner>
            {aboutOpen&&<ScreenAboult aboutIsOpen={aboutOpen} data={city} close={()=>setAboutOpen(false)}/>}
        </Main>
    </Home>
  )
}
export default HomePage