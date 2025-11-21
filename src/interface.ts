export interface CityData {
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