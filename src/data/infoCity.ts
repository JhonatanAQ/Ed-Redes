 interface CityData {
    id:number,
    name:string,
    title:string,
    subtitle:string,
    position:{
        x:number,
        y:number
    }
}
export  const cityDateJSON:CityData[] = [
        {
            "id":1,
            "name":"Curitiba",
            "title":"Capital Ecológica do Brasil",
            "subtitle":"Conhecida por seu planejamento urbano, transporte eficiente e amplas áreas verdes como o Jardim Botânico e o Parque Barigui.",
            "position":{
                "x":500,
                "y":300
            }
        },
        {
            "id":2,
            "name":"Londrina",
            "title":"Polo Regional do Norte do Paraná",
            "subtitle":"Segunda maior cidade do Paraná, importante centro universitário e agroindustrial.",
            "position":{
                "x":320,
                "y":80
            }
        },
        {
            "id":3,
            "name":"Maringa",
            "title":"Cidade Canção",
            "subtitle":"Maringá é símbolo de desenvolvimento sustentável, reconhecida pela Catedral e pelos amplos espaços verdes.",
            "position":{
                "x":240,
                "y":90
            }
        }
]

export function getCityImageSrc(cityName: string): string {
    if (cityName === "Curitiba") {
        return "/img-city/curitiba.jpg"
    }
    if (cityName === "Londrina") {
        return "/img-city/londrina.jpg"
    }
    if (cityName === "Maringa") {
        return "/img-city/maringa.jpg"
    }
    return "/img-city/londrina.jpg"
}

export function getCitySlug(cityName: string): string {
    return cityName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export function getCityBySlug(slug: string): CityData | undefined {
    return cityDateJSON.find(city => getCitySlug(city.name) === slug)
}