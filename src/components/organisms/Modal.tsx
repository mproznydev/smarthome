import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { allTypeDevices } from 'interfaces/interfaces';
import BulbModal from 'components/molecules/BulbModal';
import OutletModal from 'components/molecules/OutletModal';
import TemperatureSensorModal from 'components/molecules/TemperatureSensorModal';

type ModalInfo = {
  isOpen: boolean;
  id: string | null;
};

type ModalProps = {
  deviceId: string;
  setModalInfo: React.Dispatch<React.SetStateAction<ModalInfo>>;
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  width: 80%;

  margin: auto;
`;

const defaultDeviceDetails = {
  type: '',
  id: '',
  name: '',
  connectionState: '',
  isTurnedOn: false,
  brightness: 0,
  color: '',
  powerConsumption: 0,
  temperature: 0,
};
function Modal({ deviceId, setModalInfo }: ModalProps) {
  const [deviceDetails, setDeviceDetails] = useState<allTypeDevices>(defaultDeviceDetails);
  console.log(deviceDetails);
  useEffect(() => {
    getDetails(deviceId);
  }, []);

  const getDetails = async (id: string) => {
    try {
      const response = await fetch(`/api/v1/devices/${id}`, {
        method: 'GET',
      });
      const data: allTypeDevices = await response.json();
      setDeviceDetails(data);
    } catch (e) {}
  };
  if ('color' in deviceDetails) {
    return <BulbModal setModalInfo={setModalInfo} deviceDetails={deviceDetails}></BulbModal>;
  } else if ('powerConsumption' in deviceDetails) {
    return <OutletModal setModalInfo={setModalInfo} deviceDetails={deviceDetails}></OutletModal>;
  } else if ('temperature' in deviceDetails) {
    return <TemperatureSensorModal setModalInfo={setModalInfo} deviceDetails={deviceDetails}></TemperatureSensorModal>;
  } else {
    return <Wrapper></Wrapper>;
  }
}

export default Modal;
