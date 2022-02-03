import * as React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import * as ReactDOM from 'react-dom';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalHtmlWrapper = ({ children }: { children: React.ReactNode }) => {
  const modalContainer = document.getElementById('modal-container');
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode, modalContainer]);

  return ReactDOM.createPortal(<Wrapper>{children}</Wrapper>, modalNode);
};

export default ModalHtmlWrapper;
