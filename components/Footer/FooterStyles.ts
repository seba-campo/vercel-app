import styled from 'styled-components';
import Link from 'next/link';

export const FooterContainer = styled.footer`
  background-color: #000000;
  color: white;
  padding: 3rem 1rem 2rem;
  margin-top: auto;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 1rem;

  @media (min-width: 481px){
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-family: 'Inter', sans-serif;

  a {
    color: white;
    text-decoration: none;
    width: fit-content;
    font-size: 16px;
    font-weight: 400;
    transition: color 0.3s ease;

    &:hover {
      color: #FFC107;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 400;
`;

export const SocialTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  transition: color 0.3s ease;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    color: #FFC107;
  }
`;

export const Copyright = styled.div`
  padding-top: 2rem;
  border-top: 1px solid #333;
  
  p {
    margin: 0;
    color: #999;
    font-size: 0.875rem;
  }
`;
