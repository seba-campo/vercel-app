import styled from 'styled-components';

export const SearchContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 60vh;
  font-family: 'Inter', sans-serif;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const ResultCount = styled.p`
  margin-bottom: 2rem;
  color: #666;
  font-size: 0.9rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 0;
  font-size: 1.2rem;
  color: #666;
`;
