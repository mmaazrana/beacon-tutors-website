import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './AdminReview.module.css';
import { Edit, Trash, Check, X, Star } from 'lucide-react';
import Modal from '../Modal/Modal';
import Select from 'react-select';
import {
  ratingOptions,
  images,
  customSelectStyles,
} from '../AdminForms/AdminForms';
import formStyles from '../AdminForms/AdminForms.module.css';

export default function AdminReview(props) {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(props.review.image);
  const [username, setUsername] = useState(props.review.username);
  const [description, setDescription] = useState(props.review.description);
  const [rating, setRating] = useState(props.review.rating);

  const openEditModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const deleteHandler = () => {};

  const approveHandler = () => {};

  const discardHandler = () => {};

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

      <Modal title="Edit Review" isOpen={isOpen} closeModal={closeModal}>
        <form onSubmit={updateHandler}>
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
        </form>
      </Modal>
    </>
  );
}
