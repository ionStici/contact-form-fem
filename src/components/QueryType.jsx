import styled from 'styled-components';
import Error from './Error';
import FlexWrapper from './FlexWrapper';
import { Label as LabelStyles } from './Input';

export default function QueryType({ register, error, setValue }) {
  const handleKeydown = e => {
    if (e.key !== 'Enter') return;
    const value = e.target.querySelector('input').value;
    setValue('queryType', value);
  };

  return (
    <Fieldset>
      <Legend as="legend">
        <span>Query Type</span>
        <span>*</span>
      </Legend>

      <FlexWrapper>
        <Label htmlFor="generalEnquiry" tabIndex="0" onKeyDown={handleKeydown}>
          <Input
            type="radio"
            id="generalEnquiry"
            name="queryType"
            value="general-enquiry"
            {...register('queryType', {
              required: 'Please select a query type',
            })}
          />
          <RadioButton />
          <Background />
          <Text>General Enquiry</Text>
        </Label>

        <Label htmlFor="supportRequest" tabIndex="0" onKeyDown={handleKeydown}>
          <Input
            type="radio"
            id="supportRequest"
            name="queryType"
            value="support-request"
            {...register('queryType', {
              required: 'Please select a query type',
            })}
          />
          <RadioButton />
          <Background />
          <Text>Support Request</Text>
        </Label>
      </FlexWrapper>

      <Error error={error} />
    </Fieldset>
  );
}

const Fieldset = styled.fieldset`
  border: none;
  margin-bottom: 2.4rem;
`;

const Legend = styled(LabelStyles)`
  margin-bottom: 1.6rem;
  cursor: revert;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.1rem;
  position: relative;
  cursor: pointer;
  transition: border-color 0.25s, box-shadow 0.25s;

  &:hover .background,
  &:focus .background {
    border-color: var(--color-green-600);
    box-shadow: rgba(12, 125, 105, 0.25) 0px 2px 4px 0px inset;
  }

  &:focus {
    outline: none;
  }

  &:first-of-type {
    margin-bottom: 1.6rem;

    @media only screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }
`;

const Input = styled.input`
  display: none;

  &:checked ~ .radioButton {
    border-color: var(--color-green-600);
  }

  &:checked ~ .radioButton::after {
    background-color: var(--color-green-600);
  }

  &:checked ~ .background {
    border-color: var(--color-green-600);
    background-color: var(--color-green-200);
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
  z-index: 1;

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

const Background = styled.div.attrs({ className: 'background' })`
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  border: 1px solid var(--color-grey-500);
  transition: border-color 0.25s, background-color 0.25s;
`;

const Text = styled.span`
  font-size: 1.8rem;
  color: var(--color-grey-900);
  width: 14rem;
  margin-left: 1.45rem;
  z-index: 1;
`;
