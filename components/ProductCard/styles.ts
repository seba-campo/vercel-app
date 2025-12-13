import styled from 'styled-components';

export const Card = styled.div`
  border: 2px solid #000;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: 2px solid #FFC107;
    outline-offset: 2px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: #E0E0E0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  background: linear-gradient(135deg, #E91E63 0%, #F06292 100%);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  height: 90px;
`;

export const Name = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: white;
  margin: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Price = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin: 0;
  white-space: nowrap;
`;
