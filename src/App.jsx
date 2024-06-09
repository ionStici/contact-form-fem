import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { Toaster } from 'react-hot-toast';

import Form from './Form';

export default function App() {
  return (
    <Main>
      <GlobalStyles />
      <Toaster />

      <Section>
        <Heading>Contact Us</Heading>
        <Form />
      </Section>
    </Main>
  );
}

const Main = styled.main`
  padding: 3.2rem 1.6rem;

  @media only screen and (min-width: 768px) {
    padding: 12.8rem 4rem;
  }
`;

const Section = styled.section`
  max-width: 73.6rem;
  padding: 2.4rem;
  margin: 0 auto;
  border-radius: 1.6rem;
  background-color: var(--color-white);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media only screen and (min-width: 768px) {
    padding: 4rem;
  }
`;

const Heading = styled.h1`
  color: var(--color-grey-900);
  font-size: 3.2rem;
  margin-bottom: 3.2rem;
`;
