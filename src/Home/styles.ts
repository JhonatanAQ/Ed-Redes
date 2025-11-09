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
    gap: 2rem ;
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
`
export const HeaderIcon = styled.img`
    width:3rem;
`
export const HeaderTitle = styled.h1`
   
`
export const MapConteiner = styled.div<{$aboutIsOpen:boolean}>`
    width: ${({$aboutIsOpen})=>$aboutIsOpen ? '76%' : '100%'};
    height:100%;
    display:flex;
    justify-content:center;
    transition: width 0.5s ease-in-out;
` 
export const Map = styled.div`
    width:40rem;
    height:30rem ;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    position: relative;
`
export const MapPinLst = styled.div`
    width:40rem;
`
export const MapImg = styled.img`
    width:40rem;
`

