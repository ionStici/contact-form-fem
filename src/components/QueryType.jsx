import styled, { css } from 'styled-components';
import Error from './Error';
import FlexWrapper from './FlexWrapper';
import { Label as LabelStyles } from './Input';

const Fieldset = styled.fieldset`
  border: none;
  margin-bottom: 2.4rem;
`;

const Legend = styled(LabelStyles)`
  margin-bottom: 1.6rem;
`;

const activeBox = {
  borderColor: 'var(--color-green-600)',
  backgroundColor: 'var(--color-green-200)',
};

export default function QueryType({ register, error, selected }) {
  const handleKeydown = e => {
    if (e.key !== 'Enter') return;
    e.target.querySelector('input').checked = true;
  };

  return (
    <Fieldset>
      <Legend as="legend">
        <span>Query Type</span>
        <span>*</span>
      </Legend>

      <FlexWrapper>
        <Label
          htmlFor="generalEnquiry"
          tabIndex="0"
          onKeyDown={handleKeydown}
          style={selected === 'general-enquiry' ? activeBox : {}}
        >
          <input
            type="radio"
            id="generalEnquiry"
            name="queryType"
            value="general-enquiry"
            {...register('queryType', {
              required: 'Please select a query type',
            })}
          />
          <RadioButton />
          <span>General Enquiry</span>
        </Label>

        <Label
          htmlFor="supportRequest"
          tabIndex="0"
          onKeyDown={handleKeydown}
          style={selected === 'support-request' ? activeBox : {}}
        >
          <input
            type="radio"
            id="supportRequest"
            name="queryType"
            value="support-request"
            {...register('queryType', {
              required: 'Please select a query type',
            })}
          />
          <RadioButton />
          <span>Support Request</span>
        </Label>
      </FlexWrapper>

      <Error error={error} />
    </Fieldset>
  );
}

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.1rem;
  border: 1px solid var(--color-grey-500);
  border-radius: 0.8rem;
  font-size: 1.8rem;
  color: var(--color-grey-900);
  cursor: pointer;
  transition: border-color 0.25s, background-color 0.25s;

  &:hover,
  &:focus {
    border-color: var(--color-green-600);
    outline: none;
  }

  &:first-of-type {
    margin-bottom: 1.6rem;

    @media only screen and (min-width: 768px) {
      margin-bottom: 0;
    }
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

const RadioButton = styled.div.attrs({ className: 'radioButton' })`
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
