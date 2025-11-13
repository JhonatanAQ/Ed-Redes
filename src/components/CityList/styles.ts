import styled from 'styled-components'

export const CityListContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    gap: 1rem;
    overflow-y: auto;
`

export const CityListTitle = styled.h2`
    color: white;
    font-size: 14pt;
    font-weight: 600;
    margin-bottom: 0.5rem;
    padding-bottom: 1rem;
    border-bottom: solid 2px var(--border-color);
`

export const CityListItem = styled.button<{$isSelected:boolean}>`
    width: 100%;
    padding: 1rem;
    background-color: ${props => props.$isSelected ? 'var(--color-green)' : 'transparent'};
    color: ${props => props.$isSelected ? 'white' : '#ffffffb2'};
    border: solid 1px ${props => props.$isSelected ? 'var(--color-green)' : 'var(--border-color)'};
    border-radius: 0.5rem;
    font-size: 11pt;
    font-weight: ${props => props.$isSelected ? '600' : '400'};
    text-align: left;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${props => props.$isSelected ? 'var(--color-green)' : 'var(--bg-color)'};
        color: white;
        border-color: ${props => props.$isSelected ? 'var(--color-green)' : 'var(--color-blue)'};
        transform: translateX(4px);
    }

    &:active {
        transform: translateX(2px);
    }
`

