import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './Announcements.module.css';
import Announcement from '../Announcement/Announcement';

const data = [
  {
    title: 'Need an experienced female tutor for O-level Biology',
    days: '5-Days / Week',
    budget: '20,000 PKR / Month',
    time: '1-Hour / Day',
  },
  {
    title: 'Need an experienced female tutor for O-level Biology',
    days: '5-Days / Week',
    budget: '20,000 PKR / Month',
    time: '1-Hour / Day',
  },
  {
    title: 'Need an experienced female tutor for O-level Biology',
    days: '5-Days / Week',
    budget: '20,000 PKR / Month',
    time: '1-Hour / Day',
  },
  {
    title: 'Need an experienced female tutor for O-level Biology',
    days: '5-Days / Week',
    budget: '20,000 PKR / Month',
    time: '1-Hour / Day',
  },
  {
    title: 'Need an experienced female tutor for O-level Biology',
    days: '5-Days / Week',
    budget: '20,000 PKR / Month',
    time: '1-Hour / Day',
  },
];

export default function WritingAnnouncements(props) {
  const [announcements, setAnnouncements] = useState(data);

  const fetchMoreData = () => {
    setTimeout(() => {
      setAnnouncements([...announcements, ...data]);
    }, 500);
  };

  return (
    <div
      className={styles.announcements}
      style={{ margin: '0 auto', width: '70%' }}
    >
      <InfiniteScroll
        dataLength={announcements.length}
        next={fetchMoreData}
        hasMore={true}
        height={500}
        loader={<h4>Loading...</h4>}
      >
        {announcements.map((announcement, index) => (
          <Announcement key={index} announcement={announcement} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
