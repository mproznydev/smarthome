import * as React from 'react';
import { Bulb, ModalInfo } from 'interfaces/interfaces';
import { CloseButton } from 'components/atoms/CloseButton';
import { ModalWrapper } from 'components/atoms/ModalWrapper';
import { ModalItem } from 'components/atoms/ModalItem';
import { ListWrapper } from 'components/atoms/ListWrapper';

type BulbModalProps = {
  deviceDetails: Bulb;
  setModalInfo: React.Dispatch<React.SetStateAction<ModalInfo>>;
};

function BulbModal({ deviceDetails, setModalInfo }: BulbModalProps) {
  const { type, name, id, connectionState, isTurnedOn, brightness, color } = deviceDetails;

  return (
    <ModalWrapper>
      <ListWrapper>
        <ModalItem>Type: {type}</ModalItem>
        <ModalItem>Name: {name}</ModalItem>
        <ModalItem>Connection: {connectionState}</ModalItem>
        <ModalItem>Turned on: {isTurnedOn === true ? 'yes' : 'no'}</ModalItem>
        <ModalItem>Brightness: {brightness}</ModalItem>
        <ModalItem>Color: {color}</ModalItem>
      </ListWrapper>
      <CloseButton onClick={() => setModalInfo({ isMobile: true, isOpen: false, id })}>close</CloseButton>
    </ModalWrapper>
  );
}

export default BulbModal;
