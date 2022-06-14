import React, { useState } from 'react';
import styles from './NewAnnouncement.module.css';

export default function NewAnnouncement(props) {
  const [days, setDays] = useState('default');
  const [budget, setBudget] = useState('default');
  const [time, setTime] = useState('default');

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
              <select
                className={`adminInput ${
                  days === 'default' && styles.placeholder
                }`}
                name="days"
                defaultValue={days}
                onChange={(e) => setDays(e.target.value)}
                required
              >
                <option value="default" disabled hidden>
                  Days/Week
                </option>
                <option value="5">5-Days/Week</option>
                <option value="5">5-Days/Week</option>
              </select>

              <select
                className={`adminInput ${
                  budget === 'default' && styles.placeholder
                }`}
                name="budget"
                defaultValue={budget}
                onChange={(e) => setBudget(e.target.value)}
                required
              >
                <option value="default" disabled hidden>
                  Budget/Month
                </option>
                <option value="20000">20,000 PKR/Month</option>
                <option value="20000">20,000 PKR/Month</option>
              </select>

              <select
                className={`adminInput ${
                  time === 'default' && styles.placeholder
                }`}
                name="time"
                defaultValue={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="default" disabled hidden>
                  Time/Day
                </option>
                <option value="1">1 Hour/Day</option>
                <option value="1">1 Hour/Day</option>
              </select>
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
