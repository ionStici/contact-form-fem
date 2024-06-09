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

  ${({ $error }) =>
    $error &&
    css`
      border-color: var(--color-red);
    `}

  @media only screen and (min-width: 768px) {
    height: 13.2rem;
  }

  &:hover,
  &:focus {
    border-color: var(--color-green-600);
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
