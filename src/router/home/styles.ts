import styled from 'styled-components'


export const Home = styled.div`
    width:100% ;
    height: 100vh;
    background-color: var(--bg-color) ;
    display: flex;
    justify-content: space-between;
`
export const Main = styled.div`
    width:100%;
    height:100% ;
    background-color:var(--bg-color) ;
    display: flex;
    flex-direction: column;
    justify-content:start;
    gap: 0;
    position: relative;
    overflow: hidden;
`
export const Header = styled.header`
    width:100%;
    height: 5rem;
    top: 0;
    left: 0;
    background-color: var(--bg-header);
    -webkit-background-composite:1;
    display: flex;
    align-items: center;
    padding: 2rem 2rem;
    gap: 2rem;
    color: white;
    font-size: 8pt;
    border-bottom: solid 2px var(--border-color);
    flex-shrink: 0;
`
export const HeaderIcon = styled.img`
    width:3rem;
`
export const HeaderTitle = styled.h1`
   
`
export const ContentContainer = styled.div<{$aboutIsOpen:boolean}>`
    width: 100%;
    height: calc(100vh - 5rem);
    display: flex;
    flex-direction: row;
    position: relative;
    transition: all 0.5s ease-in-out;
    padding-right: ${props => props.$aboutIsOpen ? '28%' : '0'};
    box-sizing: border-box;
`
export const CityListWrapper = styled.div`
    width: 20%;
    min-width: 250px;
    max-width: 300px;
    height: 100%;
    background-color: var(--bg-header);
    border-right: solid 2px var(--border-color);
    flex-shrink: 0;
`
export const MapConteiner = styled.div<{$aboutIsOpen:boolean}>`
    flex: 1;
    min-width: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    box-sizing: border-box;
    position: relative;
` 
export const Map = styled.div`
    width: 40rem;
    max-width: 100%;
    height: 30rem;
    max-height: 100%;
    position: relative;
    flex-shrink: 0;
    margin: 0 auto;
`
export const MapPinLst = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: auto;
    z-index: 1;
`
export const MapImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    position: relative;
    z-index: 0;
`

