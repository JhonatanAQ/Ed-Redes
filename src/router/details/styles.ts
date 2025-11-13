import styled from 'styled-components'

export const DetailsContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--bg-color);
    display: flex;
    justify-content: center;
`

export const DetailsMain = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 2rem;
`

export const DetailsHeader = styled.header`
    width: 100%;
    height: 5rem;
    top: 0;
    left: 0;
    background-color: var(--bg-header);
    -webkit-background-composite: 1;
    display: flex;
    align-items: center;
    padding: 2rem 2rem;
    gap: 2rem;
    color: white;
    font-size: 8pt;
    border-bottom: solid 2px var(--border-color);
`

export const HeaderIcon = styled.img`
    width: 3rem;
`

export const HeaderTitle = styled.h1`
   
`

export const DetailsContent = styled.div`
    width: 100%;
    height: calc(100vh - 5rem);
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
    overflow-y: auto;
`

export const CityImageContainer = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    border: solid 2px var(--border-color);
`

export const CityImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const CityImageGradient = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(to bottom, transparent, var(--bg-color));
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    padding: 0px 20px 20px 20px;
`

export const CityName = styled.h1`
    color: #fff;
    font-size: 24pt;
`

export const CityTitle = styled.h2`
    color: var(--color-green);
    font-size: 12pt;
    font-weight: bold;
`

export const DetailsBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
`

export const CityInfo = styled.div`
    width: 100%;
    padding: 2rem;
    background-color: var(--bg-header);
    border-radius: 1rem;
    border: solid 2px var(--border-color);
`

export const CitySubtitle = styled.h3`
    color: #ffffffb2;
    font-size: 12pt;
    text-align: left;
    font-weight: 400;
    line-height: 1.6;
`

export const BackButton = styled.button`
    width: 100%;
    max-width: 200px;
    padding: 1rem 2rem;
    background-color: var(--color-green);
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 12pt;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    align-self: flex-start;

    &:hover {
        background-color: var(--color-blue);
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
`

