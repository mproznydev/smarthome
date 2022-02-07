import * as React from 'react';
import styled from 'styled-components';
import Header from 'components/organisms/Header';
import DeviceItem from 'components/molecules/DeviceItem';
import { useState, useEffect } from 'react';
import useDevices from 'hooks/useDevices';
import ErrorMessage from 'components/atoms/ErrorMessage';
import { Device, ModalInfo } from 'interfaces/interfaces';
import { ReactComponent as AddIcon } from 'assets/images/add.svg';
import ModalHtmlWrapper from 'components/molecules/ModalHtmlWrapper';
import Modal from 'components/organisms/Modal';
import useWindowDimensions from 'hooks/useWindowDimension';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.m};
`;
const DevicesList = styled.ul`
  max-width: 400px;
  width: 100%;
`;
const AddButton = styled.button`
  align-self: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.1s ease-in-out;
  }
`;
const DeviceWrapper = styled.li``;
const DevicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const DetailsWrapper = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.mq.tablet}) {
    display: flex;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.mq.tablet}) {
    justify-content: space-between;
    min-height: 86vh;
  }
`;

function HomePage() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [modalInfo, setModalInfo] = useState<ModalInfo>({
    isMobile: false,
    isOpen: false,
    id: null,
  });
  const { width } = useWindowDimensions();
  const { data, error }: { data: Device[]; error: boolean } = useDevices();

  useEffect(() => {
    setDevices(data);
  }, [data]);

  const isMobile = width < 800 ? true : false;

  return (
    <Wrapper>
      <Header></Header>
      <Content>
        <DevicesWrapper>
          <Title>List of devices:</Title>
          {error ? <ErrorMessage>sorry we have an error...</ErrorMessage> : null}
          <DevicesList>
            {devices.length > 0
              ? devices.map((device) => (
                  <DeviceWrapper key={device.id} onClick={() => setModalInfo({ isMobile, isOpen: true, id: device.id })}>
                    <DeviceItem device={device}></DeviceItem>
                  </DeviceWrapper>
                ))
              : null}
          </DevicesList>
          <AddButton>
            <AddIcon></AddIcon>
          </AddButton>
        </DevicesWrapper>
        <DetailsWrapper>
          {modalInfo.isMobile === false && modalInfo.isOpen ? (
            <Modal deviceId={modalInfo.id} setModalInfo={setModalInfo}></Modal>
          ) : (
            <Title>please choose device</Title>
          )}
        </DetailsWrapper>
      </Content>
      {modalInfo.isOpen && modalInfo.isMobile ? (
        <ModalHtmlWrapper>
          <Modal deviceId={modalInfo.id} setModalInfo={setModalInfo}></Modal>
        </ModalHtmlWrapper>
      ) : null}
    </Wrapper>
  );
}

export default HomePage;
