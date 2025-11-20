import styled, { css } from 'styled-components';

interface ButtonStyledProps {
    $variant: 'primary' | 'secondary' | 'tertiary' | 'outline';
    $fullWidth: boolean;
}

const variantStyles = {
    primary: css`
    background: linear-gradient(135deg, #5C7CFA 0%, #748FFC 100%);
    color: white;
    border: none;

    &:hover {
      box-shadow: 0 4px 12px rgba(92, 124, 250, 0.4);
    }
  `,
    secondary: css`
    background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%);
    color: #000;
    border: none;

    &:hover {
      box-shadow: 0 4px 12px rgba(255, 193, 7, 0.4);
    }
  `,
    tertiary: css`
    background: linear-gradient(135deg, #E91E63 0%, #F06292 100%);
    color: white;
    border: none;

    &:hover {
      box-shadow: 0 4px 12px rgba(233, 30, 99, 0.4);
    }
  `,
    outline: css`
    background: transparent;
    color: #000;
    border: 2px solid #000;

    &:hover {
      background: #000;
      color: white;
    }
  `,
};

export const StyledButton = styled.button<ButtonStyledProps>`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  
  ${({ $variant }) => variantStyles[$variant]}

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;
