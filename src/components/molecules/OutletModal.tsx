import * as React from 'react';
import { Outlet, ModalInfo } from 'interfaces/interfaces';
import styled from 'styled-components';
import { CloseButton } from 'components/atoms/CloseButton';
import { ModalWrapper } from 'components/atoms/ModalWrapper';

type OutletModalProps = {
  deviceDetails: Outlet;
  setModalInfo: React.Dispatch<React.SetStateAction<ModalInfo>>;
};

const List = styled.ul``;
const ListItem = styled.li`
  list-style: none;
  margin: 0.5rem;
`;

function OutletModal({ deviceDetails, setModalInfo }: OutletModalProps) {
  const { type, name, id, connectionState, powerConsumption, isTurnedOn } = deviceDetails;
  return (
    <ModalWrapper>
      <List>
        <ListItem>Type: {type}</ListItem>
        <ListItem>Name: {name}</ListItem>
        <ListItem>Connection: {connectionState}</ListItem>
        <ListItem>Turned on: {isTurnedOn === true ? 'yes' : 'no'}</ListItem>
        <ListItem>Power consumption: {powerConsumption}W</ListItem>
      </List>
      <CloseButton onClick={() => setModalInfo({ isMobile: true, isOpen: false, id })}>close</CloseButton>
    </ModalWrapper>
  );
}
export default OutletModal;
