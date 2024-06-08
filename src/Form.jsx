import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import Fieldset from './components/Fieldset';
import MessageField from './components/MessageField';

function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const onError = err => {
    console.log(err);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
      <div>
        <Box>
          <Label htmlFor="first-name">
            First Name
            <span>*</span>
          </Label>
          <Input type="text" id="first-name" />
        </Box>
        <Box>
          <Label htmlFor="last-name">
            Last Name
            <span>*</span>
          </Label>
          <Input type="text" id="last-name" />
        </Box>
      </div>

      <Box>
        <Label htmlFor="email">
          Email Address
          <span>*</span>
        </Label>
        <Input type="email" id="email" />
      </Box>

      <Fieldset register={register} />

      <MessageField register={register} />

      <Box>
        <CheckboxInput type="checkbox" id="consent" />
        <Label htmlFor="consent">
          I consent to being contacted by the team
          <span>*</span>
        </Label>
      </Box>

      <button>Submit</button>
    </StyledForm>
  );
}

export default Form;

const StyledForm = styled.form``;

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

const Input = styled.input`
  height: 5.1rem;
  border: 1px solid var(--color-grey-500);
  border-radius: 0.8rem;
`;

const CheckboxInput = styled.input``;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
`;
