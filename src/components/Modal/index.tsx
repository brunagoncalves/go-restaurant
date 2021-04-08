import { ReactNode, useEffect, useState } from 'react';
import ReactModal from 'react-modal';

import closeImg from '../../assets/close.svg';

import { Button } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: ReactNode;
}

export function Modal({ children, isOpen, onRequestClose }: ModalProps) {
  const [modalStatus, SetModalStatus] = useState(isOpen);

  useEffect(() => {
    SetModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={onRequestClose}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          // width: '736px',
          border: 'none',
        },
        overlay: {
          position: 'fixed',
          backgroundColor: '#121214e6',
        },
      }}
    >
      <Button type="button" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar" />
      </Button>
      {children}
    </ReactModal>
  );
}
