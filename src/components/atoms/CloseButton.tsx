import styled from 'styled-components';

export const CloseButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 0.2rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: auto;
  cursor: pointer;
`;
