import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Form from './Form';

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

function App() {
  return (
    <Main>
      <GlobalStyles />

      <Section>
        <Heading>Contact Us</Heading>
        <Form />
      </Section>
    </Main>
  );
}

export default App;
