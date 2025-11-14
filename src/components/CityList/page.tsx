import type { CityData } from '../../interface.ts'
import {CityListContainer,CityListItem,CityListTitle} from './styles.ts'

export function CityList({cities,onCityClick,selectedCityId}:{
    cities:CityData[],
    onCityClick:(id:number)=>void,
    selectedCityId?:number
}) {
    return(
        <CityListContainer>
            <CityListTitle>Cidades</CityListTitle>
            {cities.map(city => 
                <CityListItem 
                    key={city.id} 
                    onClick={()=>onCityClick(city.id)}
                    $isSelected={selectedCityId === city.id}
                >
                    {city.name}
                </CityListItem>
            )}
        </CityListContainer>
    )
}



