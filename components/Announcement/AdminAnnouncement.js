import React, { useState, useEffect } from 'react';
import styles from './AdminAnnouncement.module.css';
import { Calendar, Banknote, Clock, Edit, Trash, X } from 'lucide-react';
import Modal from '../Modal/Modal';
import Select from 'react-select';
import {
  daysOptions,
  budgetOptions,
  timeOptions,
  customSelectStyles,
} from '../AdminForms/AdminForms';
import formStyles from '../AdminForms/AdminForms.module.css';

export default function AdminAnnouncement(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(props.announcement.title);
  const [days, setDays] = useState(props.announcement.days);
  const [budget, setBudget] = useState(props.announcement.budget);
  const [time, setTime] = useState(props.announcement.time);

  const openEditModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const deleteHandler = () => {};

  return (
    <>
      <div className={styles.announcement}>
        <div className={styles.row}>
          <p className={styles.title}>{props.announcement.title}</p>
          <div className="icons">
            <p
              className={
                props.announcement.page === 'Home'
                  ? styles.homeTag
                  : styles.onlineTag
              }
            >
              {props.announcement.page}
            </p>
            <Edit
              color="#4FC3B1"
              size={18}
              onClick={openEditModal}
              className="editIcon"
            />
            <Trash
              color="#FF6F66"
              size={18}
              onClick={deleteHandler}
              className="trashIcon"
            />
          </div>
        </div>
        <div className={styles.options}>
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
        </div>
      </div>

      <Modal title="Edit Announcement" isOpen={isOpen} closeModal={closeModal}>
        <form onSubmit={updateHandler}>
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
        </form>
      </Modal>
    </>
  );
}
