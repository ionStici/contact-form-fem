import styled, { css } from 'styled-components';
import Error from './Error';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2.4rem;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  color: var(--color-grey-900);
  margin-bottom: 0.8rem;
  cursor: pointer;

  span:nth-child(2) {
    margin-left: 0.8rem;
    color: var(--color-green-600);
  }
`;

const StyledInput = styled.input.attrs({ type: 'text' })`
  height: 5.1rem;
  border: 1px solid var(--color-grey-500);
  border-radius: 0.8rem;
  padding: 0 2.4rem;
  font-size: 1.8rem;
  color: var(--color-grey-900);
  cursor: pointer;
  transition: border-color 0.25s, box-shadow 0.25s;

  ${({ $error }) =>
    $error &&
    css`
      border-color: var(--color-red);
    `}

  &:hover, &:focus {
    outline: none;
    border-color: var(--color-green-600);
    box-shadow: rgba(12, 125, 105, 0.25) 0px 2px 4px 0px inset;
  }
`;

function Input({ label, id, register, error }) {
  return (
    <Box>
      <Label htmlFor={id}>
        <span>{label}</span>
        <span>*</span>
      </Label>
      <StyledInput
        id={id}
        $error={error}
        {...register(id, {
          required: 'This field is required',
          pattern:
            id === 'email'
              ? {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'Please enter a valid email address',
                }
              : {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/,
                  message: 'Wrong format',
                },
        })}
      />
      <Error error={error} />
    </Box>
  );
}

export default Input;
