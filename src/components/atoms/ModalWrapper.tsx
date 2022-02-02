import styled from 'styled-components';
export const ModalWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  touch-action: none;
  user-select: none;
  transform: translateY(100px, 100px);
`;
