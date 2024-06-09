import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 1.8rem;
  color: var(--color-white);
  background-color: var(--color-green-600);
  width: 100%;
  height: 6rem;
  border-radius: 0.8rem;
  border: none;
  cursor: pointer;
  transition: filter 0.25s;

  &:hover,
  &:focus {
    filter: brightness(80%);
    outline: none;
  }
`;

function Button() {
  return <StyledButton>Submit</StyledButton>;
}

export default Button;
