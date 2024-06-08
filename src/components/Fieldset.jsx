import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const StyledFieldset = styled.fieldset`
  border: none;
  margin-bottom: 2.4rem;
`;

const Legend = styled.legend`
  font-size: 1.6rem;
  color: var(--color-grey-900);
  margin-bottom: 1.6rem;

  span {
    color: var(--color-green-600);
    margin-left: 0.8rem;
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.1rem;
  border: 1px solid var(--color-grey-500);
  border-radius: 0.8rem;
  font-size: 1.8rem;
  color: var(--color-grey-900);
  cursor: pointer;

  &:hover {
    border-color: var(--color-green-600);
  }

  &:first-of-type {
    margin-bottom: 1.6rem;
  }

  span {
    width: 14rem;
    margin-left: 1.45rem;
  }

  input {
    display: none;
  }

  input:checked ~ .radioButton {
    border-color: var(--color-green-600);
  }

  input:checked ~ .radioButton::after {
    background-color: var(--color-green-600);
  }
`;

const RadioButton = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  opacity: 0.75;
  border: 0.2rem solid var(--color-grey-500);
  position: relative;
  transition: border-color 0.3s;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    transition: background-color 0.3s;
  }
`;

function Fieldset() {
  const { register } = useForm();

  return (
    <StyledFieldset>
      <Legend>
        Query Type
        <span>*</span>
      </Legend>

      <Label htmlFor="general-enquiry">
        <input
          type="radio"
          name="query-type"
          id="general-enquiry"
          {...register('general-enquiry')}
        />
        <RadioButton className="radioButton" />
        <span>General Enquiry</span>
      </Label>

      <Label htmlFor="support-request">
        <input
          type="radio"
          name="query-type"
          id="support-request"
          {...register('support-request')}
        />
        <RadioButton className="radioButton" />
        <span>Support Request</span>
      </Label>
    </StyledFieldset>
  );
}

export default Fieldset;
