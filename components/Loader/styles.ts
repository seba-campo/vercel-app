import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const LoaderContainer = styled.div<{ $fullScreen?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  ${({ $fullScreen }) => $fullScreen && `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.95);
    z-index: 9999;
  `}
  
  ${({ $fullScreen }) => !$fullScreen && `
    padding: 3rem 1rem;
  `}
`;

export const Spinner = styled.div<{ $size?: number }>`
  width: ${({ $size }) => $size || 48}px;
  height: ${({ $size }) => $size || 48}px;
  border: 4px solid #E0E0E0;
  border-top: 4px solid #E91E63;
  border-right: 4px solid #FFC107;
  border-bottom: 4px solid #5C7CFA;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const LoaderText = styled.p`
  color: #666;
  font-size: 0.95rem;
  font-weight: 500;
  margin: 0;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

export const Dot = styled.div<{ $delay: number; $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  animation: ${bounce} 1.4s infinite ease-in-out both;
  animation-delay: ${({ $delay }) => $delay}s;
`;
