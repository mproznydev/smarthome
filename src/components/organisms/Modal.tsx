import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { allTypeDevices, ModalInfo } from 'interfaces/interfaces';
import BulbModal from 'components/molecules/BulbModal';
import OutletModal from 'components/molecules/OutletModal';
import TemperatureSensorModal from 'components/molecules/TemperatureSensorModal';
import interact from 'interactjs';

type ModalProps = {
  deviceId: string;
  setModalInfo: React.Dispatch<React.SetStateAction<ModalInfo>>;
};

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

const Wrapper = styled.div<{ position: { x: string; y: string } }>`
  display: flex;
  transform: ${({ position }) => `translate(${position.x}px, ${position.y}px)`};
`;

function Modal({ deviceId, setModalInfo }: ModalProps) {
  const [deviceDetails, setDeviceDetails] = useState<allTypeDevices>(defaultDeviceDetails);

  useEffect(() => {
    const getDetails = async (id: string) => {
      try {
        const response = await fetch(`/api/v1/devices/${id}`, {
          method: 'GET',
        });
        const data: allTypeDevices = await response.json();
        setDeviceDetails(data);
      } catch (e) {}
    };

    const fetchInterval = setInterval(() => {
      getDetails(deviceId);
    }, 9000);

    getDetails(deviceId);

    return () => {
      clearInterval(fetchInterval);
    };
  }, [deviceId]);

  interact('.modal').resizable({
    edges: {
      top: true,
      left: true,
      bottom: true,
      right: true,
    },
    listeners: {
      move: function (event) {
        let { x, y } = event.target.dataset;

        x = (parseFloat(x) || 0) + event.deltaRect.left;
        y = (parseFloat(y) || 0) + event.deltaRect.top;

        Object.assign(event.target.style, {
          width: `${event.rect.width}px`,
          height: `${event.rect.height}px`,
          // transform: `translate(${x}px, ${y}px)`,
        });

        Object.assign(event.target.dataset, { x, y });
      },
    },
  });

  const [x, y] = window.localStorage.getItem('modalPosition') ? window.localStorage.getItem('modalPosition').split(',') : ['0', '0'];

  const position = { x: Number(x), y: Number(y) };

  interact('.modal').draggable({
    listeners: {
      start(event) {},
      move(event) {
        position.x += event.dx;
        position.y += event.dy;
        window.localStorage.setItem('modalPosition', `${position.x},${position.y}`);
        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
      },
    },
  });

  const renderModal = () => {
    if ('color' in deviceDetails) {
      return <BulbModal setModalInfo={setModalInfo} deviceDetails={deviceDetails}></BulbModal>;
    } else if ('powerConsumption' in deviceDetails) {
      return <OutletModal setModalInfo={setModalInfo} deviceDetails={deviceDetails}></OutletModal>;
    } else if ('temperature' in deviceDetails) {
      return <TemperatureSensorModal setModalInfo={setModalInfo} deviceDetails={deviceDetails}></TemperatureSensorModal>;
    } else {
      return null;
    }
  };

  return (
    <Wrapper className="modal" position={{ x, y }}>
      {renderModal()}
    </Wrapper>
  );
}

export default Modal;
