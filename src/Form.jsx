import { useForm } from 'react-hook-form';

import Input from './components/Input';
import QueryType from './components/QueryType';
import Button from './components/Button';
import FlexWrapper from './components/FlexWrapper';
import Message from './components/Message';
import Consent from './components/Consent';
import toast from 'react-hot-toast';
import ToastText from './components/Toast';
import SpinnerComponent from './components/Spinner';
import { useState } from 'react';

// const defaultValues = {
//   defaultValues: {
//     firstName: 'John',
//     lastName: 'Stich',
//     email: 'contact@domain.dev',
//     queryType: 'general-enquiry',
//     message:
//       "Hello, I would like to know if you're able to build Shopify e-commerce sites. We're starting a business and we're going to use Shopify. But it would be great to work with an agency who specialises in working with it.",
//     consent: true,
//   },
// };

function Form() {
  const [showSpinner, setShowSpinner] = useState(false);

  const { register, handleSubmit, setValue, formState, reset } = useForm();
  const { errors } = formState;

  const notify = () => {
    toast.success(<ToastText />, {
      duration: 5000,
      style: {
        maxWidth: '450px',
        padding: '24px',
        backgroundColor: 'var(--color-grey-900)',
      },
    });
  };

  const onSubmit = () => {
    setShowSpinner(true);

    setTimeout(() => {
      setShowSpinner(false);
      reset();
      setTimeout(() => notify(), 150);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <QueryType
        register={register}
        error={errors?.queryType?.message}
        setValue={setValue}
      />

      <Message register={register} error={errors?.message?.message} />

      <Consent register={register} error={errors?.consent?.message} />

      {showSpinner && <SpinnerComponent />}

      <Button />
    </form>
  );
}

export default Form;
