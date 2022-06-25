import React, { useState } from 'react';
import { default as ModalComponent } from 'react-modal';
import styles from './Modal.module.css';
import { X } from 'lucide-react';

ModalComponent.setAppElement('#__next');

export default function Modal(props) {
  // let subtitle;

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  };

  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(6, 21, 55, 0.4)',
      backdropFilter: 'blur(2px)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      borderRadius: '0.75rem',
      border: 'none',
      width: '92%',
      maxWidth: '56rem',
    },
  };

  return (
    <ModalComponent
      closeTimeoutMS={400}
      isOpen={props.isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel={props.title}
    >
      {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button> */}
      <div>
        <div className={styles.modalHead}>
          <h4>{props.title}</h4>
          <X
            className={styles.close}
            onClick={props.closeModal}
            color="#ffffff"
            size={'20'}
          />
        </div>
        <div className={styles.modalContent}>{props.children}</div>
      </div>
    </ModalComponent>
  );
}
