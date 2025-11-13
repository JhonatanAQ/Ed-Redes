// Navigation component
import styled from 'styled-components'

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
`

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
`

const NavItem = styled.li`
  list-style: none;
`

const NavLink = styled.a<{ $active: boolean }>`
  color: ${({ $active }) => $active ? 'var(--color-blue)' : 'white'};
  text-decoration: none;
  font-size: 1rem;
  font-weight: ${({ $active }) => $active ? '600' : '400'};
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: var(--color-blue);
    background-color: rgba(6, 181, 212, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $active }) => $active ? '80%' : '0'};
    height: 2px;
    background-color: var(--color-blue);
    transition: width 0.3s ease;
  }
`

interface NavigationProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLink 
            $active={currentPage === 'home'}
            onClick={() => onNavigate('home')}
          >
            Início
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            $active={currentPage === 'about'}
            onClick={() => onNavigate('about')}
          >
            Sobre
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            $active={currentPage === 'contact'}
            onClick={() => onNavigate('contact')}
          >
            Contato
          </NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  )
}
