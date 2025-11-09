import styled, {keyframes} from 'styled-components'

const open = keyframes`
    from{
        opacity: 0;
        width: 0;

    }
    to{
        opacity: 1;
        width:24rem;
    }
`
export const AboultCity = styled.div<{$aboutIsOpen:boolean}>`
    width:24%;
    height:100%;
    background-color: var(--bg-header);
    border-left: solid 2px var(--border-color);
    display: flex;
    color: white;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10;
    animation:${open} 1s forwards;
    pointer-events: ${(props) => (props.$aboutIsOpen ? 'auto' : 'none')};
`
export const AboultCityName = styled.h1`
    color: white;
`

