import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 1rem;
`;

export const ResultsText = styled.p`
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  padding: 0 0.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ViewMore = styled.a`
  display: block;
  text-align: center;
  color: #2196F3;
  text-decoration: none;
  margin-top: 2rem;
  font-size: 0.95rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #1976D2;
    text-decoration: underline;
  }
`;
