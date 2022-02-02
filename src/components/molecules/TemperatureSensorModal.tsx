import * as React from 'react';
import { TemperatureSensor, ModalInfo } from 'interfaces/interfaces';
import styled from 'styled-components';
import { CloseButton } from 'components/atoms/CloseButton';
import { ModalWrapper } from 'components/atoms/ModalWrapper';

type TemperatureSensorModalProps = {
  deviceDetails: TemperatureSensor;
  setModalInfo: React.Dispatch<React.SetStateAction<ModalInfo>>;
};

const List = styled.ul``;
const ListItem = styled.li`
  list-style: none;
  margin: 0.5rem;
`;

function TemperatureSensorModal({ deviceDetails, setModalInfo }: TemperatureSensorModalProps) {
  const { type, name, id, connectionState, temperature } = deviceDetails;
  return (
    <ModalWrapper>
      <List>
        <ListItem>Type: {type}</ListItem>
        <ListItem>Name: {name}</ListItem>
        <ListItem>Connection: {connectionState}</ListItem>
        <ListItem>Temperature: {temperature}</ListItem>
      </List>
      <CloseButton onClick={() => setModalInfo({ isMobile: true, isOpen: false, id })}>close</CloseButton>
    </ModalWrapper>
  );
}

export default TemperatureSensorModal;
