import { useForm } from 'react-hook-form';

import Input from './components/Input';
import QueryType from './components/QueryType';
import Button from './components/Button';
import FlexWrapper from './components/FlexWrapper';

function Form() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = data => console.log(data);
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

      <Button />
    </form>
  );
}

export default Form;
