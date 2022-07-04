import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './AdminInquiry.module.css';
import { CheckCircle } from 'lucide-react';
import moment from 'moment';
import Modal from '../Modal/Modal';
import InfoField from './InfoField';
import toast from 'react-hot-toast';
import { db } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';

export default function AdminInquiry(props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const openViewModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const viewedHandler = async (e) => {
    e.preventDefault();
    try {
      setIsDisabled(true);
      await toast.promise(
        updateDoc(doc(db, 'inquiries', props.inquiry.id), {
          isViewed: true,
        }).then(() => {
          setIsOpen(false);
          router.replace(router.asPath, undefined, { scroll: false });
        }),
        {
          loading: 'Marking inquiry as viewed...',
          success: 'Marked as viewed successfully',
          error: 'Error marking as viewed',
        }
      );
    } catch (error) {
      console.log(error.code, error.message);
    }
    setIsDisabled(false);
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
          Submitted {moment(props.inquiry.timestamp).fromNow()}
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
        <InfoField
          label="Who are You"
          value={
            props.inquiry.description === 'teacher'
              ? 'Teacher'
              : 'Student/Parent'
          }
        />
        <InfoField
          label={`You want to ${
            props.inquiry.description === 'teacher' ? 'Work' : 'Hire'
          }`}
          value={props.inquiry.service}
        />
        {props.inquiry.comments && (
          <InfoField label="Comments" value={props.inquiry.comments} />
        )}

        {!props.inquiry.isViewed && (
          <button
            type="submit"
            className="adminButton"
            onClick={viewedHandler}
            disabled={isDisabled}
          >
            Mark as Viewed
          </button>
        )}
      </Modal>
    </>
  );
}
