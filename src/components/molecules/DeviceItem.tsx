import * as React from 'react';
import { Device } from 'interfaces/interfaces';
import styled from 'styled-components';
import { ReactComponent as Bulb } from 'assets/images/bulb.svg';
import { ReactComponent as TemperatureSensor } from 'assets/images/temperature.svg';
import { ReactComponent as Outlet } from 'assets/images/outlet.svg';

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

  & > * {
    margin: 0 0.3rem;
  }
`;
const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: capitalize;
`;
const Status = styled.p<{ connectionState: string }>`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme, connectionState }) => {
    if (connectionState === 'connected') {
      return theme.colors.success;
    } else if (connectionState === 'poorConnection') {
      return theme.colors.medium;
    } else {
      return theme.colors.error;
    }
  }};
`;

const Icon = ({ type }: { type: string }) => {
  //make it DRY
  if (type === 'bulb') {
    return <Bulb></Bulb>;
  } else if (type === 'outlet') {
    return <Outlet></Outlet>;
  } else if (type === 'temperatureSensor') {
    return <TemperatureSensor></TemperatureSensor>;
  }
};

function DeviceItem({ device }: { device: Device }) {
  const { name, id, type, connectionState } = device;
  return (
    <Wrapper key={id}>
      <Icon type={type}></Icon>
      <Name>{name}</Name>
      <Status connectionState={connectionState}>{connectionState === 'poorConnection' ? 'weak' : connectionState}</Status>
    </Wrapper>
  );
}

export default DeviceItem;
