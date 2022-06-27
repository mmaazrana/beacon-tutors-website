import React, { useState } from 'react';
import styles from './AdminInquiry.module.css';
import { CheckCircle } from 'lucide-react';
import moment from 'moment';
import Modal from '../Modal/Modal';
import InfoField from './InfoField';

export default function AdminInquiry(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openViewModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const viewedHandler = () => {
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

      <Modal title="View Inquiry" isOpen={isOpen} closeModal={closeModal}>
        <InfoField label="Name" value={props.inquiry.name} />
        <InfoField label="City" value={props.inquiry.city} />
        <InfoField label="Email" value={props.inquiry.email} />
        <InfoField label="Contact" value={props.inquiry.contact} />
        <InfoField
          label="Whatsapp Number"
          value={props.inquiry.whatsappNumber}
        />
        <InfoField label="Who are You" value={props.inquiry.whoAreYou} />
        <InfoField
          label="You want to Hire"
          value={props.inquiry.youWantToHire}
        />
        {/* <div className={styles.infoRow}>
          <p className={styles.label}>You want to Hire</p>
          <div className={styles.values}>
            {props.inquiry.youWantToHire.map((value, index) => (
              <div key={index} className={styles.value}>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div> */}
        <InfoField label="Comments" value={props.inquiry.comments} />

        {!props.inquiry.isViewed && (
          <button type="submit" className="adminButton" onClick={viewedHandler}>
            Mark as Viewed
          </button>
        )}
      </Modal>
    </>
  );
}
