import * as React from 'react';
import { Bulb, ModalInfo } from 'interfaces/interfaces';
import styled from 'styled-components';
import { CloseButton } from 'components/atoms/CloseButton';
import { ModalWrapper } from 'components/atoms/ModalWrapper';

type BulbModalProps = {
  deviceDetails: Bulb;
  setModalInfo: React.Dispatch<React.SetStateAction<ModalInfo>>;
};

const List = styled.ul``;
const ListItem = styled.li`
  list-style: none;
  margin: 0.5rem;
`;

function BulbModal({ deviceDetails, setModalInfo }: BulbModalProps) {
  const { type, name, id, connectionState, isTurnedOn, brightness, color } = deviceDetails;

  return (
    <ModalWrapper>
      <List>
        <ListItem>Type: {type}</ListItem>
        <ListItem>Name: {name}</ListItem>
        <ListItem>Connection: {connectionState}</ListItem>
        <ListItem>Turned on: {isTurnedOn === true ? 'yes' : 'no'}</ListItem>
        <ListItem>Brightness: {brightness}</ListItem>
        <ListItem>Color: {color}</ListItem>
      </List>
      <CloseButton onClick={() => setModalInfo({ isMobile: true, isOpen: false, id })}>close</CloseButton>
    </ModalWrapper>
  );
}

export default BulbModal;
