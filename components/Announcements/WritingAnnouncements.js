import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './Announcements.module.css';
import Announcement from '../Announcement/AdminAnnouncement';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

const initialData = [
  {
    title: 'Announcement 1',
    days: '5-Days / Week',
    budget: '20,000 PKR / Month',
    time: '1-Hour / Day',
  },
  {
    title: 'Announcement 2',
    days: '5-Days / Week',
    budget: '20,000 PKR / Month',
    time: '1-Hour / Day',
  },
  {
    title: 'Announcement 2',
    days: '5-Days / Week',
    budget: '20,000 PKR / Month',
    time: '1-Hour / Day',
  },
  {
    title: 'Announcement 2',
    days: '5-Days / Week',
    budget: '20,000 PKR / Month',
    time: '1-Hour / Day',
  },
];

export default function WritingAnnouncements(props) {
  const [count, setCount] = useState(0);
  const [announcements, setAnnouncements] = useState(initialData);

  const settings = {
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
  };

  useEffect(() => {
    console.log(announcements);
  }, [announcements]);

  const populateData = () => {
    return [
      {
        title: `Load More ${count}`,
        days: '5-Days / Week',
        budget: '20,000 PKR / Month',
        time: '1-Hour / Day',
      },
      {
        title: `Load More ${count}`,
        days: '5-Days / Week',
        budget: '20,000 PKR / Month',
        time: '1-Hour / Day',
      },
    ];
  };

  const fetchMoreData = () => {
    setTimeout(() => {
      setAnnouncements([
        ...announcements,
        ...populateData(setCount(count + 1)),
      ]);
    }, 500);
  };

  return (
    <div
      className={styles.announcements}
      id="scrollableDiv"
      style={{ height: 250, overflow: 'auto' }}
    >
      <InfiniteScroll
        dataLength={announcements.length}
        next={fetchMoreData}
        hasMore={true}
        scrollableTarget="scrollableDiv"
      >
        <Slider
          {...settings}
        >
          {announcements.map((announcement, index) => (
            <Announcement key={index} announcement={announcement} />
          ))}
        </Slider>
      </InfiniteScroll>

      {/* <InfiniteScroll
        className={styles.list}
        dataLength={announcements.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        height={400}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {announcements.map((announcement, index) => (
          <Announcement key={index} announcement={announcement} />
        ))}
      </InfiniteScroll> */}
    </div>
  );
}

// import React, { useState } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import styles from './Announcements.module.css';
// import Announcement from '../Announcement/Announcement';

// const data = [
//   {
//     title: 'Need an experienced female tutor for O-level Biology',
//     days: '5-Days / Week',
//     budget: '20,000 PKR / Month',
//     time: '1-Hour / Day',
//   },
//   {
//     title: 'Need an experienced female tutor for O-level Biology',
//     days: '5-Days / Week',
//     budget: '20,000 PKR / Month',
//     time: '1-Hour / Day',
//   },
//   {
//     title: 'Need an experienced female tutor for O-level Biology',
//     days: '5-Days / Week',
//     budget: '20,000 PKR / Month',
//     time: '1-Hour / Day',
//   },
//   {
//     title: 'Need an experienced female tutor for O-level Biology',
//     days: '5-Days / Week',
//     budget: '20,000 PKR / Month',
//     time: '1-Hour / Day',
//   },
//   {
//     title: 'Need an experienced female tutor for O-level Biology',
//     days: '5-Days / Week',
//     budget: '20,000 PKR / Month',
//     time: '1-Hour / Day',
//   },
// ];

// export default function WritingAnnouncements(props) {
//   const [announcements, setAnnouncements] = useState(data);

//   const fetchMoreData = () => {
//     setTimeout(() => {
//       setAnnouncements([...announcements, ...data]);
//     }, 500);
//   };

//   return (
//     <div
//       className={styles.announcements}
//       style={{ margin: '0 auto', width: '70%' }}
//     >
//       <InfiniteScroll
//         dataLength={announcements.length}
//         next={fetchMoreData}
//         hasMore={true}
//         height={500}
//         loader={<h4>Loading...</h4>}
//       >
//         {announcements.map((announcement, index) => (
//           <Announcement key={index} announcement={announcement} />
//         ))}
//       </InfiniteScroll>
//     </div>
//   );
// }
