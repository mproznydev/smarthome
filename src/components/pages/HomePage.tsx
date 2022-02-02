import * as React from 'react';
import styled from 'styled-components';
import Header from 'components/organisms/Header';
import DeviceItem from 'components/molecules/DeviceItem';
import { useState, useEffect } from 'react';
import useDevices from 'hooks/useDevices';
import ErrorMessage from 'components/atoms/ErrorMessage';
import { Device } from 'interfaces/interfaces';

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
const DeviceWrapper = styled.li``;

function HomePage() {
  const [devices, setDevices] = useState<Device[]>([]);

  const { data, error }: { data: Device[]; error: boolean } = useDevices();

  useEffect(() => {
    setDevices(data);
  }, [data]);

  return (
    <Wrapper>
      <Header></Header>
      <Title>List of devices:</Title>
      {error ? <ErrorMessage>sorry we have an error...</ErrorMessage> : null}
      <DevicesList>
        {devices.length > 0
          ? devices.map((device) => (
              <DeviceWrapper key={device.id}>
                <DeviceItem device={device}></DeviceItem>
              </DeviceWrapper>
            ))
          : null}
      </DevicesList>
    </Wrapper>
  );
}

export default HomePage;
