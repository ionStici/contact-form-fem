import styled, { keyframes } from 'styled-components';

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

const RadioButton = styled.div.attrs({
  className: 'radioButton',
})`
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

const fadeIn = keyframes`
  0% {
    margin-top: 0;
    height: 0;
    opacity: 0;
  }

  100% {
    margin-top: 0.8rem;
    height: 2rem;
    opacity: 1;
  }
`;

const Error = styled.span`
  font-size: 1.6rem;
  color: var(--color-red);

  display: inline-block;

  animation: ${fadeIn} 0.3s ease-in-out;
  animation-fill-mode: forwards;
`;

function Fieldset({ register, error }) {
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
          value="general-enquiry"
          {...register('queryType', { required: 'Please select a query type' })}
        />
        <RadioButton />
        <span>General Enquiry</span>
      </Label>

      <Label htmlFor="support-request">
        <input
          type="radio"
          name="query-type"
          id="support-request"
          value="support-request"
          {...register('queryType', { required: 'Please select a query type' })}
        />
        <RadioButton />
        <span>Support Request</span>
      </Label>

      {error && <Error>{error}</Error>}
    </StyledFieldset>
  );
}

export default Fieldset;
