import styled from 'styled-components';

const Wrapper = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 1.6rem;
  }
`;

function FlexWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default FlexWrapper;
