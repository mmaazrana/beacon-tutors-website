import React, { useState } from 'react';
import Select from 'react-select';
import {
  daysOptions,
  budgetOptions,
  timeOptions,
  customSelectStyles,
} from '../AdminForms/AdminForms';
import formStyles from '../AdminForms/AdminForms.module.css';

export default function NewAnnouncement(props) {
  const [title, setTitle] = useState('');
  const [days, setDays] = useState(null);
  const [budget, setBudget] = useState(null);
  const [time, setTime] = useState(null);

  const postHandler = async (e) => {
    setTitle('');
    setDays(null);
    setBudget(null);
    setTime(null);
    e.preventDefault();
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
                placeholder="Days/Week"
              />

              <Select
                className="adminInput"
                onChange={setBudget}
                options={budgetOptions}
                styles={customSelectStyles}
                placeholder="Budget/Month"
              />

              <Select
                className={`adminInput ${formStyles.last}`}
                onChange={setTime}
                options={timeOptions}
                styles={customSelectStyles}
                placeholder="Time/Day"
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
