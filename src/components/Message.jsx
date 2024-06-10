import styled, { css } from 'styled-components';
import { Label } from './Input';
import Error from './Error';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

const Textarea = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  height: 24rem;
  padding: 1.2rem 2.4rem;

  border: 1px solid var(--color-grey-500);
  border-radius: 0.8rem;

  font-size: 1.8rem;
  color: var(--color-grey-900);
  cursor: pointer;
  transition: border-color 0.25s, box-shadow 0.25s;

  ${({ $error }) =>
    $error &&
    css`
      border-color: var(--color-red);
    `}

  @media only screen and (min-width: 768px) {
    height: 13.2rem;
  }

  @media only screen and (min-width: 1100px) {
    height: 10.5rem;
  }

  &:hover,
  &:focus {
    border-color: var(--color-green-600);
    box-shadow: rgba(12, 125, 105, 0.25) 0px 2px 4px 0px inset;
    outline: none;
  }
`;

function Message({ register, error }) {
  return (
    <Box>
      <Label htmlFor="message">
        <span>Message</span>
        <span>*</span>
      </Label>
      <Textarea
        id="message"
        $error={error}
        {...register('message', { required: 'This field is required' })}
      />

      <Error error={error} />
    </Box>
  );
}

export default Message;
