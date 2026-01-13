import styled, { css, keyframes } from 'styled-components';

interface ButtonStyledProps {
  $variant: 'primary' | 'secondary' | 'tertiary' | 'outline';
  $fullWidth: boolean;
  $isLoading?: boolean | false;
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

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: currentColor;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;

export const StyledButton = styled.button<ButtonStyledProps>`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ $variant }) => variantStyles[$variant]}

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      cursor: wait;
      &:hover {
        transform: none;
      }
    `}
`;

