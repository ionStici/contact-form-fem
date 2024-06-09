import React from 'react';
import styled, { keyframes } from 'styled-components';

const blurBackground = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const SpinnerOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2.5px);
  background-color: rgba(0, 0, 0, 0.25);
  animation: ${blurBackground} 0.3s ease-in-out;
  z-index: 9999;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 1rem solid rgba(255, 255, 255, 0.85);
  border-top: 1rem solid #3498db;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  animation: ${spin} 1s linear infinite;
`;

const SpinnerComponent = () => {
  return (
    <SpinnerOverlay>
      <Spinner />
    </SpinnerOverlay>
  );
};

export default SpinnerComponent;
