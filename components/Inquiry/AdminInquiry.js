import React, { useState } from 'react';
import styles from './AdminInquiry.module.css';
import { CheckCircle, X } from 'lucide-react';
import Modal from 'react-modal';
import { customFormStyles } from '../AdminForms/AdminForms';
import formStyles from '../AdminForms/AdminForms.module.css';
import moment from 'moment';
import InfoField from './InfoField';

Modal.setAppElement('#__next');

export default function AdminInquiry(props) {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const openViewModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const viewedHandler = async (e) => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.inquiry} onClick={openViewModal}>
        <div className={styles.row}>
          <p className={styles.name}>{props.inquiry.name}</p>
          {props.inquiry.isViewed && (
            <div className={styles.icon}>
              <CheckCircle color="#4FC3B1" size={12} />
              <p> Viewed</p>
            </div>
          )}
        </div>
        <p className={styles.timeAgo}>
          Submitted {moment(props.inquiry.date).fromNow()}
        </p>
      </div>

      <Modal
        closeTimeoutMS={1000}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customFormStyles}
        contentLabel="View Inquiry"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button> */}
        <div>
          <div className={formStyles.modalHead}>
            <h4>View Inquiry</h4>
            <X
              className={formStyles.close}
              onClick={closeModal}
              color="#ffffff"
              size={'20'}
            />
          </div>
          <div className={formStyles.modalContent}>
            <InfoField label="Name" value={props.inquiry.name} />
            <InfoField label="City" value={props.inquiry.city} />
            <InfoField label="Email" value={props.inquiry.email} />
            <InfoField label="Contact" value={props.inquiry.contact} />
            <InfoField
              label="Whatsapp Number"
              value={props.inquiry.whatsappNumber}
            />
            <InfoField label="Who are You" value={props.inquiry.whoAreYou} />
            <div className={styles.infoRow}>
              <p className={styles.label}>You want to Hire</p>
              <div className={styles.values}>
                {props.inquiry.youWantToHire.map((value, index) => (
                  <div key={index} className={styles.value}>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <InfoField label="Comments" value={props.inquiry.comments} />

            {!props.inquiry.isViewed && (
              <button
                type="submit"
                className="adminButton"
                onClick={viewedHandler}
              >
                Mark as Viewed
              </button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
