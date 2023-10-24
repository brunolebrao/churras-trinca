'use client';

import React from 'react';
import ReactModal from 'react-modal';

import * as S from './styles';

type ModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
  title?: string;
};

export const Modal = ({
  isOpen,
  onRequestClose,
  children,
  title
}: ModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.CloseButton type="button" onClick={onRequestClose}>
        <img src="/img/close.svg" alt="Fechar Modal" />
      </S.CloseButton>
      {title && <S.Title>{title}</S.Title>}
      {children}
    </ReactModal>
  );
};
