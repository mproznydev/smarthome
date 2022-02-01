import * as React from 'react';
import styled from 'styled-components';
import Header from 'components/organisms/Header';
import Device from 'components/molecules/Device';
import { useState, useEffect } from 'react';
import useDevices from 'hooks/useDevices';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 100vh;
  padding: 1rem;
`;
const Title = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.m};
`;
const DevicesList = styled.ul``;
const DeviceItem = styled.li``;

function HomePage() {
  const [devices, setDevices] = useState();

  const data: any = useDevices();

  useEffect(() => {
    setDevices(data);
  }, []);

  return (
    <Wrapper>
      <Header></Header>
      <Title>List of devices:</Title>
      <DevicesList>
        <DeviceItem>
          <Device></Device>
        </DeviceItem>
      </DevicesList>
    </Wrapper>
  );
}

export default HomePage;
