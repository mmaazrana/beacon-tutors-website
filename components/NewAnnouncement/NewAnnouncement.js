import React, { useState } from 'react';
import styles from './NewAnnouncement.module.css';
import Select from 'react-select';

const daysOptions = [
  { value: '5', label: '5-Days/Week' },
  { value: '6', label: '6-Days/Week' },
];

const budgetOptions = [
  { value: '20000', label: '20,000 PKR/Month' },
  { value: '30000', label: '30,000 PKR/Month' },
];

const timeOptions = [
  { value: '1', label: '1 Hour/Day' },
  { value: '2', label: '2 Hour/Day' },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    boxShadow: '0 4px 40px rgba(93, 143, 193, 0.25)',
    borderRadius: '0.6rem',
    padding: '0.25rem 0',
  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: '#a1bedb',
    fontWeight: '500',
  }),

  singleValue: (provided, state) => ({
    ...provided,
    color: '#3d6b98',
  }),

  option: (provided, state) => ({
    ...provided,
    // to do
    // backgroundColor: state.isSelected && '#a1bedb',
    // border on focus?
  }),

  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#a1bedb',
    '&:hover': { color: '#3d6b98' },
  }),
};

export default function NewAnnouncement(props) {
  const [days, setDays] = useState(null);
  const [budget, setBudget] = useState(null);
  const [time, setTime] = useState(null);

  const postHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="adminHeading">
        Create a new
        <br />
        Announcement
      </h1>
      <div className={styles.container}>
        <form onSubmit={postHandler}>
          <div className={styles.inputs}>
            <textarea
              className="adminInput"
              placeholder="Title"
              name="title"
              rows="4"
            ></textarea>

            <div className={styles.inputsRow}>
              <Select
                className={`adminInput ${styles.first}`}
                onChange={setDays}
                options={daysOptions}
                styles={customStyles}
                placeholder="Days/Week"
              />

              <Select
                className="adminInput"
                onChange={setBudget}
                options={budgetOptions}
                styles={customStyles}
                placeholder="Budget/Month"
              />

              <Select
                className={`adminInput ${styles.last}`}
                onChange={setTime}
                options={timeOptions}
                styles={customStyles}
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
