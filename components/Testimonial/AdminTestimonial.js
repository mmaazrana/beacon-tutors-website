import React, { useState, useEffect } from 'react';
import styles from './AdminTestimonial.module.css';
import { Calendar, Banknote, Clock, Edit, Trash, X } from 'lucide-react';
import Modal from 'react-modal';
import Select from 'react-select';
import {
  ratingOptions,
  customSelectStyles,
  customFormStyles,
} from '../AdminForms/AdminForms';
import formStyles from '../AdminForms/AdminForms.module.css';

Modal.setAppElement('#__next');

export default function AdminAnnouncement(props) {
  // let subtitle;
  //   const [modalIsOpen, setIsOpen] = useState(false);
  //   const [title, setTitle] = useState(props.announcement.title);
  //   const [days, setDays] = useState(props.announcement.days);
  //   const [budget, setBudget] = useState(props.announcement.budget);
  //   const [time, setTime] = useState(props.announcement.time);

  //   useEffect(() => {
  //     console.log(days, budget, time);
  //   }, [days, budget, time]);

  const openEditModal = () => {
    setIsOpen(true);
  };

  //   const afterOpenModal = () => {
  //     // references are now sync'd and can be accessed.
  //     // subtitle.style.color = '#f00';
  //   };

  //   const closeModal = () => {
  //     setIsOpen(false);
  //   };

  //   const updateHandler = async (e) => {
  //     e.preventDefault();
  //     setIsOpen(false);
  //   };

  const deleteHandler = async (e) => {};

  return (
    <>
      <div className={styles.testimonial}>
        <div className={styles.row}>
          <p className={styles.title}>{props.testimonial.description}</p>
          <div className={styles.icons}>
            <div>
              <Edit color="#42DF29" size={18} onClick={openEditModal} />
            </div>
            <div>
              <Trash color="#CC1919" size={18} onClick={deleteHandler} />
            </div>
          </div>
        </div>
        {/* <div className={styles.options}>
          <div className={styles.option}>
            <Calendar color="#FF6F66" />
            <p className={styles.optionText}>{props.announcement.days}</p>
          </div>
          <div className={styles.option}>
            <Banknote color="#4FC3B1" />
            <p className={styles.optionText}>{props.announcement.budget}</p>
          </div>
          <div className={styles.option}>
            <Clock color="#3E6C98" />
            <p className={styles.optionText}>{props.announcement.time}</p>
          </div>
        </div> */}
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
