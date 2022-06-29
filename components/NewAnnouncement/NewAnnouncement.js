import React, { useState } from 'react';
import { useRouter } from 'next/router';
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

  const postHandler = async (e) => {
    e.preventDefault();
    try {
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
    router.replace(router.asPath, undefined, { scroll: false });
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
            <label className="toggle">
              <span>Select Page </span>
              <Switch
                checked={checked}
                onChange={(nextChecked) => {
                  setChecked(nextChecked);
                }}
                offColor="#ff6f66"
                onColor="#4fc3b1"
                offHandleColor="#ffebe5"
                onHandleColor="#e2f8f3"
                height={42}
                width={122}
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
              required
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

            <button type="submit" className="adminButton">
              Post Announcement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
