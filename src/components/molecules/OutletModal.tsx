import * as React from 'react';
import { Outlet, ModalInfo } from 'interfaces/interfaces';
import styled from 'styled-components';
import { CloseButton } from 'components/atoms/CloseButton';
import { ModalWrapper } from 'components/atoms/ModalWrapper';
import { ModalItem } from 'components/atoms/ModalItem';
import { ListWrapper } from 'components/atoms/ListWrapper';

type OutletModalProps = {
  deviceDetails: Outlet;
  setModalInfo: React.Dispatch<React.SetStateAction<ModalInfo>>;
};

function OutletModal({ deviceDetails, setModalInfo }: OutletModalProps) {
  const { type, name, id, connectionState, powerConsumption, isTurnedOn } = deviceDetails;
  return (
    <ModalWrapper>
      <ListWrapper>
        <ModalItem>Type: {type}</ModalItem>
        <ModalItem>Name: {name}</ModalItem>
        <ModalItem>Connection: {connectionState}</ModalItem>
        <ModalItem>Turned on: {isTurnedOn === true ? 'yes' : 'no'}</ModalItem>
        <ModalItem>Power consumption: {powerConsumption}W</ModalItem>
      </ListWrapper>
      <CloseButton onClick={() => setModalInfo({ isMobile: true, isOpen: false, id })}>close</CloseButton>
    </ModalWrapper>
  );
}
export default OutletModal;
