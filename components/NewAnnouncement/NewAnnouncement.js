import React, { useState } from 'react';
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

export default function NewAnnouncement(props) {
  const [checked, setChecked] = useState(true);
  const [page, setPage] = useState('Online');
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
