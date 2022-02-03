import * as React from 'react';
import { TemperatureSensor, ModalInfo } from 'interfaces/interfaces';
import styled from 'styled-components';
import { CloseButton } from 'components/atoms/CloseButton';
import { ModalWrapper } from 'components/atoms/ModalWrapper';
import { ModalItem } from 'components/atoms/ModalItem';
import { ListWrapper } from 'components/atoms/ListWrapper';

type TemperatureSensorModalProps = {
  deviceDetails: TemperatureSensor;
  setModalInfo: React.Dispatch<React.SetStateAction<ModalInfo>>;
};

function TemperatureSensorModal({ deviceDetails, setModalInfo }: TemperatureSensorModalProps) {
  const { type, name, id, connectionState, temperature } = deviceDetails;
  return (
    <ModalWrapper>
      <ListWrapper>
        <ModalItem>Type: {type}</ModalItem>
        <ModalItem>Name: {name}</ModalItem>
        <ModalItem>Connection: {connectionState === 'poorConnection' ? 'weak' : connectionState}</ModalItem>
        <ModalItem>Temperature: {temperature}°C</ModalItem>
      </ListWrapper>
      <CloseButton onClick={() => setModalInfo({ isMobile: true, isOpen: false, id })}>close</CloseButton>
    </ModalWrapper>
  );
}

export default TemperatureSensorModal;
