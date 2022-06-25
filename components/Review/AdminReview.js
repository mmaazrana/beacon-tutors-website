import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './AdminReview.module.css';
import { Edit, Trash, Check, X, Star } from 'lucide-react';
import Modal from 'react-modal';
import Select from 'react-select';
import {
  ratingOptions,
  images,
  customSelectStyles,
  customFormStyles,
} from '../AdminForms/AdminForms';
import formStyles from '../AdminForms/AdminForms.module.css';

Modal.setAppElement('#__next');

export default function AdminReview(props) {
  // let subtitle;
  const { pathname } = useRouter();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(props.review.image);
  const [username, setUsername] = useState(props.review.username);
  const [description, setDescription] = useState(props.review.description);
  const [rating, setRating] = useState(props.review.rating);

  const openEditModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const deleteHandler = async (e) => {};

  const approveHandler = async (e) => {};

  const discardHandler = async (e) => {};

  return (
    <>
      <div className={styles.review}>
        <div className={styles.image}>{images[props.review.image]}</div>
        <div className={styles.content}>
          <div className={styles.row}>
            <p className={styles.username}>{props.review.username}</p>
            <div className={styles.icons}>
              {pathname === '/admin/managereviews' && (
                <>
                  <Edit color="#42DF29" size={18} onClick={openEditModal} />
                  <Trash color="#CC1919" size={18} onClick={deleteHandler} />
                </>
              )}
              {pathname === '/admin/approvereviews' && (
                <>
                  <Check color="#42DF29" size={18} onClick={approveHandler} />
                  <X color="#CC1919" size={18} onClick={discardHandler} />
                </>
              )}
            </div>
          </div>
          {[...Array(5)].map((x, i) => (
            <Star
              key={i}
              size={16}
              className={i < props.review.rating ? styles.filled : styles.empty}
            />
          ))}
          <p className={styles.description}>
            <span>“</span>
            {props.review.description}
          </p>
        </div>
      </div>

      <Modal
        closeTimeoutMS={1000}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customFormStyles}
        contentLabel="Edit Review"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button> */}
        <div>
          <div className={formStyles.modalHead}>
            <h4>Edit Review</h4>
            <X
              className={formStyles.close}
              onClick={closeModal}
              color="#ffffff"
              size={'20'}
            />
          </div>
          <form onSubmit={updateHandler}>
            <div className={formStyles.modalContent}>
              <input
                className="adminInput"
                type="text"
                name="username"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <textarea
                className="adminInput"
                placeholder="Description"
                name="description"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>

              <div className={formStyles.inputsRow}>
                <Select
                  className="adminInput"
                  onChange={setRating}
                  options={ratingOptions}
                  styles={customSelectStyles}
                  defaultValue={{ value: rating, label: rating }}
                  placeholder="Rating"
                />
              </div>

              <button type="submit" className="adminButton">
                Update Review
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
