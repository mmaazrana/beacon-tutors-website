import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './AdminAnnouncement.module.css';
import { Calendar, Banknote, Clock, Edit, Trash, X } from 'lucide-react';
import Modal from '../Modal/Modal';
import DeleteModal from '../Modal/DeleteModal';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import Select from 'react-select';
import {
  daysOptions,
  budgetOptions,
  timeOptions,
  customSelectStyles,
} from '../AdminForms/AdminForms';
import formStyles from '../AdminForms/AdminForms.module.css';
import toast from 'react-hot-toast';
import { db } from '../../firebase';
import {
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore/lite';

export default function AdminAnnouncement(props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [checked, setChecked] = useState(
    props.announcement.page === 'Online' ? true : false
  );
  const [page, setPage] = useState(props.announcement.page);
  const [title, setTitle] = useState(props.announcement.title);
  const [days, setDays] = useState(props.announcement.days);
  const [budget, setBudget] = useState(props.announcement.budget);
  const [time, setTime] = useState(props.announcement.time);
  const [isDisabled, setIsDisabled] = useState(false);

  const openEditModal = () => {
    setIsOpen(true);
  };

  const openDeleteModal = () => {
    setConfirmDelete(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setConfirmDelete(false);
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    if (title === '' || days === 0 || budget === 0 || time === 0)
      toast.error('Announcement fields cannot be empty');
    else {
      try {
        setIsDisabled(true);
        await toast.promise(
          updateDoc(doc(db, 'announcements', props.announcement.id), {
            page: checked ? 'Online' : 'Home',
            title,
            days,
            budget,
            time,
            timestamp: serverTimestamp(),
          }).then(() => {
            setIsOpen(false);
            props.setUpdate(!props.update);
            // router.replace(router.asPath, undefined, { scroll: false });
          }),
          {
            loading: 'Updating announcement...',
            success: 'Announcement updated successfully',
            error: 'Error updating announcement',
          }
        );
      } catch (error) {
        console.log(error.code, error.message);
      }
      setIsDisabled(false);
    }
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    try {
      setIsDisabled(true);
      await toast.promise(
        deleteDoc(doc(db, 'announcements', props.announcement.id)).then(() => {
          setConfirmDelete(false);
          props.setUpdate(!props.update);
          // router.replace(router.asPath, undefined, { scroll: false });
        }),
        {
          loading: 'Deleting announcement...',
          success: 'Announcement deleted successfully',
          error: 'Error deleting announcement',
        }
      );
    } catch (error) {
      console.log(error.code, error.message);
    }
    setIsDisabled(false);
  };

  return (
    <>
      <div className="adminCard">
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
              onClick={openDeleteModal}
              className="trashIcon"
            />
          </div>
        </div>
        <div className={styles.options}>
          <div className={styles.option}>
            <Calendar color="#FF6F66" />
            <p className={styles.optionText}>
              {props.announcement.days}-
              {props.announcement.days == 1 ? 'Day' : 'Days'}
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
              {props.announcement.time}-
              {props.announcement.time == 1 ? 'Hour' : 'Hours'}
              /Day
            </p>
          </div>
        </div>
      </div>

      <Modal title="Edit Announcement" isOpen={isOpen} closeModal={closeModal}>
        <form onSubmit={updateHandler}>
          <ToggleSwitch
            checked={checked}
            onChange={(nextChecked) => {
              setChecked(nextChecked);
            }}
          />

          <textarea
            className="adminInput"
            placeholder="Title"
            name="title"
            rows="4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className={formStyles.inputsRow}>
            <Select
              className={`adminInput ${formStyles.first}`}
              onChange={(value) => setDays(value.value)}
              options={daysOptions}
              styles={customSelectStyles}
              placeholder="Days/Week"
              value={{
                value: days,
                label: `${days}-${days == 1 ? 'Day' : 'Days'}/Week`,
              }}
            />

            <Select
              className="adminInput"
              onChange={(value) => setBudget(value.value)}
              options={budgetOptions}
              styles={customSelectStyles}
              placeholder="Budget/Month"
              value={{
                value: budget,
                label: `${budget.toLocaleString()}-PKR/Month`,
              }}
            />

            <Select
              className={`adminInput ${formStyles.last}`}
              onChange={(value) => setTime(value.value)}
              options={timeOptions}
              styles={customSelectStyles}
              placeholder="Time/Day"
              value={{
                value: time,
                label: `${time}-${time == 1 ? 'Hour' : 'Hours'}/Day`,
              }}
            />
          </div>

          <button type="submit" className="adminButton" disabled={isDisabled}>
            Update Announcement
          </button>
        </form>
      </Modal>

      <DeleteModal
        action="Delete"
        item="Announcement"
        isOpen={confirmDelete}
        closeModal={closeModal}
        deleteHandler={deleteHandler}
        isDisabled={isDisabled}
      />
    </>
  );
}
