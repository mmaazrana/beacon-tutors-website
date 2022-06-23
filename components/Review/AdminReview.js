import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import styles from './AdminReview.module.css';
import { Edit, Trash, Check, X, Star } from 'lucide-react';
import Modal from 'react-modal';
import Select from 'react-select';
import {
  ratingOptions,
  customSelectStyles,
  customFormStyles,
} from '../AdminForms/AdminForms';
import formStyles from '../AdminForms/AdminForms.module.css';
import { ReactComponent as Female1 } from '../../assets/Avatars/Female1.svg';
import { ReactComponent as Female2 } from '../../assets/Avatars/Female2.svg';
import { ReactComponent as Female3 } from '../../assets/Avatars/Female3.svg';
import { ReactComponent as Female4 } from '../../assets/Avatars/Female4.svg';
import { ReactComponent as Male1 } from '../../assets/Avatars/Male1.svg';
import { ReactComponent as Male2 } from '../../assets/Avatars/Male2.svg';
import { ReactComponent as Male3 } from '../../assets/Avatars/Male3.svg';
import { ReactComponent as Male4 } from '../../assets/Avatars/Male4.svg';

Modal.setAppElement('#__next');

export default function AdminReview(props) {
  const images = {
    f1: <Female1 />,
    f2: <Female2 />,
    f3: <Female3 />,
    f4: <Female4 />,
    m1: <Male1 />,
    m2: <Male2 />,
    m3: <Male3 />,
    m4: <Male4 />,
  };

  // let subtitle;
  const { pathname } = useRouter();
  const [modalIsOpen, setIsOpen] = useState(false);
  // const [title, setTitle] = useState(props.announcement.title);
  //   const [days, setDays] = useState(props.announcement.days);
  //   const [budget, setBudget] = useState(props.announcement.budget);
  //   const [time, setTime] = useState(props.announcement.time);

  const openEditModal = () => {
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

  const deleteHandler = async (e) => {};

  const approveHandler = async (e) => {};

  const discardHandler = async (e) => {};

  return (
    <>
      <div className={styles.review}>
        <div className={styles.image}>{images[props.review.image]}</div>
        <div className={styles.content}>
          <div className={styles.row}>
            <p className={styles.username}>{props.review.username}</p>
            <div className={styles.icons}>
              {pathname === '/admin/managereviews' && (
                <>
                  <Edit color="#42DF29" size={18} onClick={openEditModal} />
                  <Trash color="#CC1919" size={18} onClick={deleteHandler} />
                </>
              )}
              {pathname === '/admin/approvereviews' && (
                <>
                  <Check color="#42DF29" size={18} onClick={approveHandler} />
                  <X color="#CC1919" size={18} onClick={discardHandler} />
                </>
              )}
            </div>
          </div>
          {[...Array(5)].map((x, i) => (
            <Star
              key={i}
              size={16}
              className={i < props.review.rating ? styles.filled : styles.empty}
            />
          ))}
          <p className={styles.description}>
            <span>“</span>
            {props.review.description}
          </p>
        </div>
      </div>

      {/* <Modal
        closeTimeoutMS={1000}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customFormStyles}
        contentLabel="Edit Announcement"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>
          <div className={styles.modalHead}>
            <h4>Edit Annnouncement</h4>
            <X
              className={styles.close}
              onClick={closeModal}
              color="#ffffff"
              size={'20'}
            />
          </div>
          <form onSubmit={updateHandler}>
            <div className={formStyles.inputs}>
              <textarea
                className="adminInput"
                placeholder="Title"
                name="title"
                rows="4"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>

              <div className={formStyles.inputsRow}>
                <Select
                  className={`adminInput ${formStyles.first}`}
                  onChange={setDays}
                  options={daysOptions}
                  styles={customSelectStyles}
                  defaultValue={{ value: days, label: days }}
                  placeholder="Days/Week"
                />

                <Select
                  className="adminInput"
                  onChange={setBudget}
                  options={budgetOptions}
                  styles={customSelectStyles}
                  defaultValue={{ value: budget, label: budget }}
                  placeholder="Budget/Month"
                />

                <Select
                  className={`adminInput ${formStyles.last}`}
                  onChange={setTime}
                  options={timeOptions}
                  styles={customSelectStyles}
                  defaultValue={{ value: time, label: time }}
                  placeholder="Time/Day"
                />
              </div>

              <button type="submit" className="adminButton">
                Update Announcement
              </button>
            </div>
          </form>
        </div>
      </Modal> */}
    </>
  );
}
