import React, { useState } from 'react';
import { useRouter } from 'next/router';
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
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function NewAnnouncement(props) {
  const router = useRouter();
  const [checked, setChecked] = useState(true);
  const [title, setTitle] = useState('');
  const [days, setDays] = useState(0);
  const [budget, setBudget] = useState(0);
  const [time, setTime] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const postHandler = async (e) => {
    e.preventDefault();
    if (title === '' || days === 0 || budget === 0 || time === 0)
      toast.error('Announcement fields cannot be empty');
    else {
      try {
        setIsDisabled(true);
        await toast.promise(
          addDoc(collection(db, 'announcements'), {
            page: checked ? 'Online' : 'Home',
            title,
            days,
            budget,
            time,
            timestamp: serverTimestamp(),
          }).then((docRef) => {
            console.log(docRef.id);
            setChecked(true);
            setTitle('');
            setDays(0);
            setBudget(0);
            setTime(0);
            router.replace(router.asPath, undefined, { scroll: false });
          }),
          {
            loading: 'Creating announcement...',
            success: 'Announcement created successfully',
            error: 'Error creating announcement',
          }
        );
      } catch (error) {
        console.log(error.code, error.message);
      }
      setIsDisabled(false);
    }
  };

  return (
    <div>
      <h1 className="adminHeading">
        Create a new <br />
        Announcement
      </h1>
      <div>
        <form onSubmit={postHandler}>
          <div className={formStyles.inputs}>
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
                value={
                  days > 0 && {
                    value: days,
                    label: `${days}-${days == 1 ? 'Day' : 'Days'}/Week`,
                  }
                }
              />

              <Select
                className="adminInput"
                onChange={(value) => setBudget(value.value)}
                options={budgetOptions}
                styles={customSelectStyles}
                placeholder="Budget/Month"
                value={
                  budget > 0 && {
                    value: budget,
                    label: `${budget.toLocaleString()}-PKR/Month`,
                  }
                }
              />

              <Select
                className={`adminInput ${formStyles.last}`}
                onChange={(value) => setTime(value.value)}
                options={timeOptions}
                styles={customSelectStyles}
                placeholder="Time/Day"
                value={
                  time > 0 && {
                    value: time,
                    label: `${time}-${time == 1 ? 'Hour' : 'Hours'}/Day`,
                  }
                }
              />
            </div>

            <button type="submit" className="adminButton" disabled={isDisabled}>
              Post Announcement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
