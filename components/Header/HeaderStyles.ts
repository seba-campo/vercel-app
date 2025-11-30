import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #000000;
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  flex-shrink: 0;
`;

export const LogoText = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  white-space: nowrap;
`;

export const DesktopSearch = styled.div`
  flex: 1;
  max-width: 500px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LoginButton = styled.button`
  background: linear-gradient(135deg, #E91E63 0%, #F06292 100%);
  color: white;
  border: none;
  padding: 0.625rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-size: 0.95rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(233, 30, 99, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;

export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Hamburger = styled.div<{ $isOpen: boolean }>`
  width: 24px;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    height: 3px;
    background-color: white;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  ${({ $isOpen }) => $isOpen && `
    span:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }
  `}
`;

export const MobileMenu = styled.div`
  font-family: 'Inter', sans-serif;
  padding: 1rem;
  background-color: #000000;
  border-top: 1px solid #333;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 620px;
  flex-direction: column;
  gap: 1rem;

  .options{
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly
  }

  p {
    color: white;
    font-size: 32px;
    font-weight: 600;
    margin: 0;
    padding: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 4px;

    &:hover {
      background-color: #2a2a2a;
      transform: translateX(4px);
      color: #FFC107;
    }
  }
`;

export const MobileSessionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter', sans-serif;

  .session-email{
    color: white;
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    padding: 0.75rem;
    transition: all 0.3s ease;
    border-radius: 4px;
  }
  
  .session-action{
    color: #E75A7C;
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    padding: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 4px;
  }
`;
