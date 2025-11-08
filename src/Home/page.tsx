import { useEffect, useState } from 'react'
import './styles.css'

import { cityDateJSON}  from '../data/infoCity.ts'
import type { CityData } from '../interface.ts'
import { ScreenAboult } from '../components/Aboult/page.tsx'
import { MapPin } from '../components/MapPin/page.tsx'

function Home() {
    const [aboutOpen,setAboutOpen] = useState(false)
    const [city ,setCity] = useState<CityData>()
    const [cityData,setCityData] = useState<CityData[]>([])

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
    <div className='page-home'>
        <div className='page-main '>
            <header className='page-header'>
                <img src="./logo.svg" alt="icone do site semeando o futuro" />
                <h1 className='page-title'>Semeando o Futuro</h1>
            </header>
            <div className='page-map' >
                <img src="./map.svg" alt="mapa do paraná" />
                {cityData.map(cityItem =>       
                    <MapPin
                        key={cityItem.id}
                        data={cityItem}
                        onClick={()=>pagebout({id:cityItem.id})}
                        className={`${cityItem.name}-${cityItem.id}`} 
                    />
                )}
            </div>
        </div>
        {aboutOpen&&<ScreenAboult data={city}/>}
    </div>
  )
}
export default Home