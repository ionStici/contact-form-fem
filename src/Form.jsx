import styled from 'styled-components';

import { useForm } from 'react-hook-form';

import Input from './components/Input';
import Button from './components/Button';

const Wrapper = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 1.6rem;
  }
`;

function Form() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = data => console.log(data);
  const onError = err => console.log(err);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Wrapper>
        <Input
          label="First Name"
          id="firstName"
          register={register}
          error={errors?.firstName?.message}
        />
        <Input
          label="Last Name"
          id="lastName"
          register={register}
          error={errors?.lastName?.message}
        />
      </Wrapper>
      <Input
        label="Email Address"
        id="email"
        register={register}
        error={errors?.email?.message}
      />

      <Button />
    </form>
  );
}

export default Form;
