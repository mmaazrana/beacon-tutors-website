import React, { useState, useEffect } from 'react';
import styles from './AdminAnnouncement.module.css';
import { Calendar, Banknote, Clock, Edit, Trash, X } from 'lucide-react';
import Modal from '../Modal/Modal';
import Switch from 'react-switch';
import Select from 'react-select';
import {
  daysOptions,
  budgetOptions,
  timeOptions,
  customToggleOffStyles,
  customToggleOnStyles,
  customSelectStyles,
} from '../AdminForms/AdminForms';
import formStyles from '../AdminForms/AdminForms.module.css';

export default function AdminAnnouncement(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(
    props.announcement.page === 'Online' ? true : false
  );
  const [page, setPage] = useState(props.announcement.page);
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
    setPage(props.announcement.page);
    setTitle(props.announcement.title);
    setDays(props.announcement.days);
    setBudget(props.announcement.budget);
    setTime(props.announcement.time);
    e.preventDefault();
    setIsOpen(false);
  };

  useEffect(() => {
    console.log(days);
  }, [days]);

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
            <p className={styles.optionText}>
              {`${props.announcement.days}-${
                props.announcement.days == 1 ? 'Day' : 'Days'
              }`}
              /Week
            </p>
          </div>
          <div className={styles.option}>
            <Banknote color="#4FC3B1" />
            <p className={styles.optionText}>
              {props.announcement.budget.toLocaleString()}-PKR/Month
            </p>
          </div>
          <div className={styles.option}>
            <Clock color="#3E6C98" />
            <p className={styles.optionText}>
              {`${props.announcement.time}-${
                props.announcement.time == 1 ? 'Hour' : 'Hours'
              }`}
              /Day
            </p>
          </div>
        </div>
      </div>

      <Modal title="Edit Announcement" isOpen={isOpen} closeModal={closeModal}>
        <form onSubmit={updateHandler}>
          <label>
            <Switch
              checked={checked}
              onChange={(nextChecked) => {
                setChecked(nextChecked);
                setPage(checked ? 'Online' : 'Home');
              }}
              offColor="#ff6f66"
              onColor="#4fc3b1"
              offHandleColor="#ffebe5"
              onHandleColor="#e2f8f3"
              height={50}
              width={130}
              activeBoxShadow="none"
              uncheckedIcon={<p style={customToggleOffStyles}>Home</p>}
              checkedIcon={<p style={customToggleOnStyles}>Online</p>}
              className="react-switch"
            />
          </label>

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
              onChange={(value) => setDays(value.value)}
              options={daysOptions}
              styles={customSelectStyles}
              defaultValue={{
                value: days,
                label: `${days}-${days == 1 ? 'Day' : 'Days'}/Week`,
              }}
              placeholder="Days/Week"
            />

            <Select
              className="adminInput"
              onChange={(value) => setBudget(value.value)}
              options={budgetOptions}
              styles={customSelectStyles}
              defaultValue={{
                value: budget,
                label: `${budget.toLocaleString()}-PKR/Month`,
              }}
              placeholder="Budget/Month"
            />

            <Select
              className={`adminInput ${formStyles.last}`}
              onChange={(value) => setTime(value.value)}
              options={timeOptions}
              styles={customSelectStyles}
              defaultValue={{
                value: time,
                label: `${time}-${time == 1 ? 'Hour' : 'Hours'}/Day`,
              }}
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
