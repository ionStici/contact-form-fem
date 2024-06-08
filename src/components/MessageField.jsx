import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
`;

const Label = styled.label`
  width: fit-content;
  margin-bottom: 0.8rem;

  font-size: 1.6rem;
  color: var(--color-grey-900);

  span {
    color: var(--color-green-600);
    margin-left: 0.8rem;
  }
`;

const Textarea = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  padding: 1.2rem 2.4rem;
  height: 24rem;
  border: 1px solid var(--color-grey-500);
  border-radius: 0.8rem;

  font-size: 1.8rem;
  color: var(--color-grey-900);
`;

function MessageField({ register }) {
  return (
    <Box>
      <Label htmlFor="message">
        Message
        <span>*</span>
      </Label>
      <Textarea
        name="message"
        id="message"
        {...register('message', { required: 'This field is required' })}
      ></Textarea>
    </Box>
  );
}

export default MessageField;
