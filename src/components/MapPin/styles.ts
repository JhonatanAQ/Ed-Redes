import styled, {keyframes,css} from 'styled-components'

const pulseAnimation = keyframes`
    0% {
        box-shadow: 0 0 0 0px #ffffff;
    }
    100% {
        box-shadow: 0 0 0 10px #06b5d44b;
    }
`
export const MapPinB = styled.button<{$position:{x:number,y:number}}>`
    position: absolute;
    top:${props=>props.$position.y}px;
    left:${props=>props.$position.x}px;
    
    border: none;
    width:34px;
    height:34px;
    background-color:transparent;
`
export const MapPin1 = styled.div<{$isPulsing:boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-color: transparent;
    box-shadow: 0 0 0 0px #06b5d4;
    ${props => 
        props.$isPulsing && 
        css`
            /* Apply the animation when isPulsing is true */
            animation: ${pulseAnimation} 1.2s ease-out infinite; 
            /* Set the initial box-shadow for the animation loop */
            box-shadow: 0 0 0 0px #06b5d4; 
        `
    }
`
export const MapPin2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 80%;
    border-radius: 100%;
    background-color: transparent;
    border: solid 0.3rem #06b5d4;
`
export const MapPin3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 60%;
    border-radius:  100%;
    background-color:#ffffff;
    border:none
`
