import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.s};
  font-weight: ${({ theme, bold }) => (bold ? theme.bold : theme.light)};
`;

export default Paragraph;
