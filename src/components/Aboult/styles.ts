import styled, {keyframes} from 'styled-components'

const open = keyframes`
    from{
        opacity: 0;
        right: -24%;

    }
    to{
        opacity: 1;
        right: 0;
    }
`
export const AboultCity = styled.div<{$aboutIsOpen:boolean}>`
    width:28%;
    height:100%;
    background-color: var(--bg-color);
    border-left: solid 2px var(--border-color);
    display: flex;
    flex-direction: column;
    color: white;
    position: absolute;
    right: 0;
    top: 0;
    animation:${open} 1s forwards;
    pointer-events: ${(props) => (props.$aboutIsOpen ? 'auto' : 'none')};
    z-index: 10;
`
export const CityHeader = styled.div`
    width:100%;
    display:flex;
    position:relative;
`
export const CityImg = styled.img`
    color: white;
    width:100%;
`
export const CityImgGradient = styled.div`
    width:100%;
    height:50%;
    position:absolute;
    bottom: 0;
    background: linear-gradient(to bottom,transparent,var(--bg-color));
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    padding: 0px 20px 20px 20px;
`
export const CityName = styled.h1`
    color: #fff;
    font-size: 18pt;
`
export const CityTitle = styled.h2`
    color: var(--color-green);
    font-size: 10pt;
    font-weight: bold;
`
export const CitySubTitle = styled.h3`
    color: #ffffffb2;
    font-size: 10pt;
    text-align: left;
    font-weight: 400;
`
export const Close = styled.button`
    position:absolute;
    width:1.5rem;
    height:1.5rem;
    border-radius:0.4rem;
    top:30px;
    right:30px;
    border: none;
    background-color: var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CloseIcon = styled.img`
    width:1.5rem;
    height:1.5rem;
`
export const CityMain = styled.div`
    width:100%;
    padding:20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const DetailsButton = styled.button`
    width: 100%;
    padding: 0.75rem 1.5rem;
    background-color: var(--color-green);
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 10pt;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;

    &:hover {
        background-color: var(--color-blue);
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
`
