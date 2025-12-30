import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;

  @media (min-width: 768px) {
      aspect-ratio: 4/3;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: #000;
`;

export const Price = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #000;
`;

export const Button = styled.button`
  background-color: #19C3FA;
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
`;
