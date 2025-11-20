import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  gap: 0.5rem;
  width: 100%;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.625rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #FFC107;
    box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const SearchButton = styled.button`
  background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%);
  color: #000;
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
    box-shadow: 0 4px 12px rgba(255, 193, 7, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
  }
`;
