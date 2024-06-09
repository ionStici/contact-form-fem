import styled from 'styled-components';

const Box = styled.div`
  margin-left: 0.8rem;
`;

const TextMd = styled.p`
  font-size: 1.8rem;
  color: var(--color-white);
  margin-bottom: 0.8rem;
`;

const TextSm = styled.p`
  font-size: 1.6rem;
  color: var(--color-green-200);
`;

function ToastText() {
  return (
    <Box>
      <TextMd>Message Sent!</TextMd>
      <TextSm>Thanks for completing the form. We’ll be in touch soon!</TextSm>
    </Box>
  );
}

export default ToastText;
