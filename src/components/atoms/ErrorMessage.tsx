import styled from 'styled-components';

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  margin: 1rem 0;
`;
export default ErrorMessage;
