import { useForm } from 'react-hook-form';

import Input from './components/Input';
import QueryType from './components/QueryType';
import Button from './components/Button';
import FlexWrapper from './components/FlexWrapper';
import Message from './components/Message';
import Consent from './components/Consent';

function Form() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  const onError = err => console.log(err);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <FlexWrapper>
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
      </FlexWrapper>

      <Input
        label="Email Address"
        id="email"
        register={register}
        error={errors?.email?.message}
      />

      <QueryType register={register} error={errors?.queryType?.message} />

      <Message register={register} error={errors?.message?.message} />

      <Consent register={register} error={errors?.consent?.message} />

      <Button />
    </form>
  );
}

export default Form;
