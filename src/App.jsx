import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Fieldset from './components/Fieldset';
import { useForm } from 'react-hook-form';

const Main = styled.main`
  padding: 3.2rem 1.6rem;
`;

const Section = styled.section`
  padding: 2.4rem;
  margin: 0 auto;
  border-radius: 1.6rem;
  background-color: var(--color-white);
`;

const Heading = styled.h1`
  color: var(--color-grey-900);
  font-size: 3.2rem;
  margin-bottom: 3.2rem;
`;

const Form = styled.form``;

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

function App() {
  const { getValues } = useForm();

  return (
    <Main>
      <GlobalStyles />

      <Section>
        <Heading>Contact Us</Heading>

        <Form>
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

          <Fieldset />

          <Box>
            <Label htmlFor="message">
              Message
              <span>*</span>
            </Label>
            <textarea name="message" id="message"></textarea>
          </Box>

          <Box>
            <CheckboxInput type="checkbox" id="consent" />
            <Label htmlFor="consent">
              I consent to being contacted by the team
              <span>*</span>
            </Label>
          </Box>

          <button>Submit</button>
        </Form>
      </Section>
    </Main>
  );
}

export default App;
