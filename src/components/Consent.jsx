import styled from 'styled-components';
import { Label as LabelStyles } from './Input';
import Error from './Error';

const Box = styled.div`
  margin-bottom: 4rem;

  div {
    display: flex;
    align-items: center;
    column-gap: 1.9rem;
  }
`;

const Input = styled.input`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  accent-color: var(--color-green-600);
  cursor: pointer;
`;

const Label = styled(LabelStyles)`
  margin-bottom: 0;
`;

function Consent({ register, error }) {
  return (
    <Box>
      <div>
        <Input
          type="checkbox"
          id="consent"
          {...register('consent', {
            required: 'To submit this form, please consent to being contacted',
          })}
        />
        <Label htmlFor="consent">
          <span>I consent to being contacted by the team</span>
          <span>*</span>
        </Label>
      </div>
      <Error error={error} />
    </Box>
  );
}

export default Consent;
