import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    margin-top: 0;
    height: 0;
    opacity: 0;
  }

  100% {
    margin-top: 0.8rem;
    height: 1.8rem;
    opacity: 1;
  }
`;

const StyledError = styled.span`
  font-size: 1.5rem;
  color: var(--color-red);
  margin-top: 0;
  height: 0;
  display: inline-block;
  animation: ${fadeIn} 0.25s;
  animation-fill-mode: forwards;
`;

function Error({ error }) {
  return <>{error && <StyledError>{error}</StyledError>}</>;
}

export default Error;
