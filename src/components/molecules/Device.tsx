import * as React from 'react';

import styled from 'styled-components';
import { ReactComponent as Bulb } from 'assets/images/bulb.svg';

const Wrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  margin: 1rem 0;
  cursor: pointer;
`;
const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
`;
const Status = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.success};
`;

function Device() {
  return (
    <Wrapper>
      <Bulb></Bulb>
      <Name>Living room bulb</Name>
      <Status>Connected</Status>
    </Wrapper>
  );
}

export default Device;
