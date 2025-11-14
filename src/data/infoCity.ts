 interface CityData {
    id:number,
    name:string,
    title:string,
    subtitle:string,
    position:{
        x:number,
        y:number
    },
    stats?: {
        habitantes?: number,
        ensinoMedio?: number,
        ensinoFundamental?: number,
        qtdEscolas?: number,
        desigualdadeRenda?: string,
        nivelEscolaridade?: string,
        taxaAnalfabetismo?: string,
        acessoInternet?: string
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
        },
        {
            "id":4,
            "name":"Rio Azul",
            "title":"Terra das Águas Cristalinas",
            "subtitle":"Rio Azul é um município localizado na região centro-sul do Paraná, conhecido por suas belezas naturais e riqueza hídrica. A cidade possui uma economia baseada na agricultura familiar e pecuária, com destaque para a produção de grãos. O município preserva tradições culturais e oferece qualidade de vida aos seus habitantes, com foco no desenvolvimento sustentável e na educação.",
            "position":{
                "x":520,
                "y":380
            },
            "stats":{
                "habitantes":14025,
                "ensinoMedio":452,
                "ensinoFundamental":132,
                "qtdEscolas":3
            }
        },
        {
            "id":5,
            "name":"Nova Aurora",
            "title":"Aurora do Oeste Paranaense",
            "subtitle":"Nova Aurora está localizada na região oeste do Paraná, caracterizada por sua economia agrícola diversificada. O município possui uma população acolhedora e mantém forte tradição na produção de soja, milho e criação de suínos. A cidade investe em educação e infraestrutura para garantir o desenvolvimento de suas comunidades.",
            "position":{
                "x":180,
                "y":250
            },
            "stats":{
                "habitantes":13765
            }
        },
        {
            "id":6,
            "name":"Araruna",
            "title":"Cidade do Norte Pioneiro",
            "subtitle":"Araruna está situada na região norte do Paraná, conhecida como Norte Pioneiro. O município possui uma rica história de colonização e desenvolvimento agrícola. A cidade se destaca pela produção de café, cana-de-açúcar e pela pecuária leiteira, mantendo tradições culturais e investindo em educação e saúde.",
            "position":{
                "x":380,
                "y":180
            },
            "stats":{
                "habitantes":13295
            }
        },
        {
            "id":7,
            "name":"Curiúva",
            "title":"Portal do Vale do Ribeira",
            "subtitle":"Curiúva está localizada na região dos Campos Gerais, próxima ao Vale do Ribeira. O município possui uma economia baseada na agricultura e pecuária, com destaque para a produção de grãos e criação de gado. A cidade preserva belezas naturais e investe em turismo rural, oferecendo qualidade de vida aos seus habitantes.",
            "position":{
                "x":580,
                "y":420
            },
            "stats":{
                "habitantes":13295
            }
        },
        {
            "id":8,
            "name":"Engenheiro Beltrão",
            "title":"Cidade do Centro-Oeste Paranaense",
            "subtitle":"Engenheiro Beltrão está situada na região centro-oeste do Paraná, conhecida por sua economia agrícola forte. O município se destaca na produção de soja, milho e trigo, além da pecuária. A cidade possui uma população trabalhadora e investe em educação, saúde e infraestrutura para o desenvolvimento sustentável.",
            "position":{
                "x":300,
                "y":200
            },
            "stats":{
                "habitantes":13295
            }
        },
        {
            "id":9,
            "name":"General Carneiro",
            "title":"Terra das Araucárias",
            "subtitle":"General Carneiro está localizada na região sul do Paraná, em uma área de grande beleza natural com presença de araucárias e mata nativa. O município possui economia baseada na agricultura, pecuária e extração de madeira de forma sustentável. A cidade preserva tradições culturais e oferece turismo ecológico.",
            "position":{
                "x":720,
                "y":580
            },
            "stats":{
                "habitantes":13295
            }
        },
        {
            "id":10,
            "name":"Paraíso do Norte",
            "title":"Paraíso do Norte Paranaense",
            "subtitle":"Paraíso do Norte está situada na região noroeste do Paraná, conhecida por sua economia agrícola diversificada. O município se destaca na produção de soja, milho e algodão, além da pecuária. A cidade possui uma população acolhedora e investe em educação e desenvolvimento social.",
            "position":{
                "x":360,
                "y":100
            },
            "stats":{
                "habitantes":14023
            }
        },
        {
            "id":11,
            "name":"Mamborê",
            "title":"Cidade do Centro-Oeste",
            "subtitle":"Mamborê está localizada na região centro-oeste do Paraná, caracterizada por sua forte produção agrícola. O município se destaca na produção de soja, milho e trigo, além da criação de suínos e aves. A cidade investe em tecnologia agrícola e educação para garantir o desenvolvimento sustentável.",
            "position":{
                "x":280,
                "y":220
            },
            "stats":{
                "habitantes":13295
            }
        },
        {
            "id":12,
            "name":"Santa Izabel do Oeste",
            "title":"Terra da Fronteira Oeste",
            "subtitle":"Santa Izabel do Oeste está situada na região oeste do Paraná, próxima à fronteira. O município possui uma economia baseada na agricultura familiar e pecuária, com destaque para a produção de grãos. A cidade mantém tradições culturais e investe em educação e saúde para melhorar a qualidade de vida.",
            "position":{
                "x":120,
                "y":320
            },
            "stats":{
                "habitantes":13295
            }
        },
        {
            "id":13,
            "name":"Alto Paraná",
            "title":"Alto do Paraná",
            "subtitle":"Alto Paraná está localizada na região noroeste do estado, conhecida por sua economia agrícola forte. O município se destaca na produção de soja, milho e algodão, além da pecuária. A cidade possui uma população trabalhadora e investe em infraestrutura e educação para o desenvolvimento regional.",
            "position":{
                "x":420,
                "y":80
            },
            "stats":{
                "habitantes":12923
            }
        },
        {
            "id":14,
            "name":"Balsa Nova",
            "title":"Cidade da Região Metropolitana",
            "subtitle":"Balsa Nova está localizada na Região Metropolitana de Curitiba, próxima à capital paranaense. O município possui uma economia diversificada, com destaque para a agricultura, pecuária e indústria. A cidade oferece qualidade de vida aos seus habitantes e investe em educação e infraestrutura urbana.",
            "position":{
                "x":540,
                "y":400
            },
            "stats":{
                "habitantes":13867
            }
        },
        {
            "id":15,
            "name":"Nova Cantu",
            "title":"Cantinho do Oeste",
            "subtitle":"Nova Cantu está situada na região oeste do Paraná, caracterizada por sua economia agrícola. O município se destaca na produção de soja, milho e criação de suínos. A cidade possui uma população acolhedora e investe em educação e desenvolvimento social para garantir o bem-estar da comunidade.",
            "position":{
                "x":240,
                "y":240
            },
            "stats":{
                "habitantes":5550
            }
        },
        {
            "id":16,
            "name":"Iretama",
            "title":"Terra do Centro-Oeste",
            "subtitle":"Iretama está localizada na região centro-oeste do Paraná, conhecida por sua produção agrícola. O município se destaca na produção de soja, milho e trigo, além da pecuária. A cidade investe em tecnologia agrícola e educação para promover o desenvolvimento sustentável e melhorar a qualidade de vida.",
            "position":{
                "x":320,
                "y":210
            },
            "stats":{
                "habitantes":10843
            }
        },
        {
            "id":17,
            "name":"Altamira do Paraná",
            "title":"Altamira do Norte",
            "subtitle":"Altamira do Paraná está situada na região noroeste do estado, caracterizada por sua economia agrícola. O município se destaca na produção de grãos e pecuária. A cidade possui uma população trabalhadora e investe em educação e infraestrutura para garantir o desenvolvimento regional e melhor qualidade de vida.",
            "position":{
                "x":480,
                "y":140
            },
            "stats":{
                "habitantes":3543
            }
        },
        {
            "id":18,
            "name":"Céu Azul",
            "title":"Céu Azul do Oeste",
            "subtitle":"Céu Azul está localizada na região oeste do Paraná, conhecida por suas belezas naturais e economia agrícola. O município se destaca na produção de soja, milho e criação de suínos. A cidade preserva o meio ambiente e investe em educação e turismo rural para promover o desenvolvimento sustentável.",
            "position":{
                "x":160,
                "y":280
            },
            "stats":{
                "habitantes":11255
            }
        },
        {
            "id":19,
            "name":"Alto Piquiri",
            "title":"Alto do Piquiri",
            "subtitle":"Alto Piquiri está situada na região oeste do Paraná, caracterizada por sua forte produção agrícola. O município se destaca na produção de soja, milho e trigo, além da pecuária. A cidade possui uma população trabalhadora e investe em tecnologia agrícola e educação para o desenvolvimento regional.",
            "position":{
                "x":260,
                "y":230
            },
            "stats":{
                "habitantes":9771
            }
        },
        {
            "id":20,
            "name":"Campo Bonito",
            "title":"Campo Bonito do Oeste",
            "subtitle":"Campo Bonito está localizada na região oeste do Paraná, conhecida por suas belezas naturais e economia agrícola. O município se destaca na produção de grãos e pecuária. A cidade preserva o meio ambiente e investe em educação e desenvolvimento social para garantir qualidade de vida aos seus habitantes.",
            "position":{
                "x":200,
                "y":260
            },
            "stats":{
                "habitantes":3997
            }
        },
        {
            "id":21,
            "name":"Tapira",
            "title":"Tapira do Centro-Oeste",
            "subtitle":"Tapira está situada na região centro-oeste do Paraná, caracterizada por sua economia agrícola. O município se destaca na produção de soja, milho e criação de suínos. A cidade possui uma população acolhedora e investe em educação e infraestrutura para promover o desenvolvimento sustentável.",
            "position":{
                "x":300,
                "y":190
            },
            "stats":{
                "habitantes":5807
            }
        },
        {
            "id":22,
            "name":"Pérola d'Oeste",
            "title":"Pérola do Oeste Paranaense",
            "subtitle":"Pérola d'Oeste está localizada na região oeste do Paraná, próxima à fronteira. O município possui uma economia baseada na agricultura familiar e pecuária, com destaque para a produção de grãos. A cidade mantém tradições culturais e investe em educação e saúde para melhorar a qualidade de vida.",
            "position":{
                "x":140,
                "y":300
            },
            "stats":{
                "habitantes":6218
            }
        },
        {
            "id":23,
            "name":"Pranchita",
            "title":"Pranchita da Fronteira",
            "subtitle":"Pranchita está situada na região oeste do Paraná, na fronteira com outros estados. O município possui uma economia baseada na agricultura e pecuária, com destaque para a produção de grãos. A cidade preserva belezas naturais e investe em educação e desenvolvimento social para garantir o bem-estar da comunidade.",
            "position":{
                "x":150,
                "y":340
            },
            "stats":{
                "habitantes":5831
            }
        },
        {
            "id":24,
            "name":"Nova Aliança do Ivaí",
            "title":"Nova Aliança do Norte",
            "subtitle":"Nova Aliança do Ivaí está localizada na região noroeste do Paraná, conhecida por sua economia agrícola. O município se destaca na produção de soja, milho e algodão, além da pecuária. A cidade possui uma população trabalhadora e investe em educação e infraestrutura para o desenvolvimento regional.",
            "position":{
                "x":400,
                "y":120
            },
            "stats":{
                "habitantes":1323
            }
        },
        {
            "id":25,
            "name":"Godoy Moreira",
            "title":"Godoy Moreira do Centro",
            "subtitle":"Godoy Moreira está situada na região centro do Paraná, caracterizada por sua economia agrícola. O município se destaca na produção de grãos e pecuária. A cidade possui uma população acolhedora e investe em educação e desenvolvimento social para garantir qualidade de vida aos seus habitantes.",
            "position":{
                "x":560,
                "y":360
            },
            "stats":{
                "habitantes":13295
            }
        },
        {
            "id":26,
            "name":"Salgado Filho",
            "title":"Salgado Filho do Centro-Oeste",
            "subtitle":"Salgado Filho está localizada na região centro-oeste do Paraná, conhecida por sua produção agrícola. O município se destaca na produção de soja, milho e trigo, além da pecuária. A cidade investe em tecnologia agrícola e educação para promover o desenvolvimento sustentável e melhorar a qualidade de vida.",
            "position":{
                "x":290,
                "y":240
            },
            "stats":{
                "habitantes":13295
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

export function getCitiesSortedAlphabetically(): CityData[] {
    return [...cityDateJSON].sort((a, b) => {
        const nameA = a.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        const nameB = b.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        return nameA.localeCompare(nameB)
    })
}