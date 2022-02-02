import * as React from 'react';
import { Outlet, ModalInfo } from 'interfaces/interfaces';
import styled from 'styled-components';

type OutletModalProps = {
  deviceDetails: Outlet;
  setModalInfo: React.Dispatch<React.SetStateAction<ModalInfo>>;
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;
const List = styled.ul``;
const ListItem = styled.li`
  list-style: none;
  margin: 0.5rem;
`;
const CloseButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 0.2rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: auto;
`;

function OutletModal({ deviceDetails, setModalInfo }: OutletModalProps) {
  const { type, name, id, connectionState, powerConsumption, isTurnedOn } = deviceDetails;
  return (
    <Wrapper>
      <List>
        <ListItem>Type: {type}</ListItem>
        <ListItem>Name: {name}</ListItem>
        <ListItem>Connection: {connectionState}</ListItem>
        <ListItem>Turned on: {isTurnedOn === true ? 'yes' : 'no'}</ListItem>
        <ListItem>Power consumption: {powerConsumption}W</ListItem>
      </List>
      <CloseButton onClick={() => setModalInfo({ isOpen: false, id })}>close</CloseButton>
    </Wrapper>
  );
}
export default OutletModal;
