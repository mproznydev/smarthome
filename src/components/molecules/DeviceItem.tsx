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
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  margin: 1rem 0;
  cursor: pointer;
  min-height: 80px;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }
  & > * {
    margin: 0 0.3rem;
  }
  @media (min-width: ${({ theme }) => theme.mq.tablet}) {
    min-width: 350px;
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  margin-right: 1rem;
`;
const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: capitalize;
  font-family: 'Montserrat', sans-serif;
`;
const Status = styled.p<{ connectionState: string }>`
  margin-left: auto;
  font-weight: 600;
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
      <IconWrapper>
        <Icon type={type}></Icon>
      </IconWrapper>

      <Name>{name}</Name>
      <Status connectionState={connectionState}>{connectionState === 'poorConnection' ? 'weak' : connectionState}</Status>
    </Wrapper>
  );
}

export default DeviceItem;
