import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './AdminReview.module.css';
import { Edit, Trash, Check, X } from 'lucide-react';
import { Rating } from 'react-simple-star-rating';
import Modal from '../Modal/Modal';
import DeleteModal from '../Modal/DeleteModal';
import Select from 'react-select';
import {
  ratingOptions,
  // images,
  getImage,
  imagesOptions,
  customSelectStyles,
} from '../AdminForms/AdminForms';
import formStyles from '../AdminForms/AdminForms.module.css';
import toast from 'react-hot-toast';
import { db } from '../../firebase';
import { doc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';

export default function AdminReview(props) {
  const { pathname } = useRouter();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [modalAction, setModalAction] = useState('');
  const [image, setImage] = useState(props.review.image);
  const [username, setUsername] = useState(props.review.username);
  const [description, setDescription] = useState(props.review.description);
  const [rating, setRating] = useState(props.review.rating);

  const openEditModal = () => {
    setIsOpen(true);
  };

  const openDeleteModal = () => {
    setConfirmDelete(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setConfirmDelete(false);
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    try {
      await toast.promise(
        updateDoc(doc(db, 'reviews', props.review.id), {
          image,
          username,
          description,
          rating,
          timestamp: serverTimestamp(),
        }).then(() => {
          setIsOpen(false);
        }),
        {
          loading: 'Updating review...',
          success: 'Review updated successfully',
          error: 'Error updating review',
        }
      );
    } catch (error) {
      console.log(error.code, error.message);
    }
    router.replace(router.asPath, undefined, { scroll: false });
  };

  const deleteHandler = async (e, modalAction) => {
    e.preventDefault();
    try {
      await toast.promise(
        deleteDoc(doc(db, 'reviews', props.review.id)).then(() =>
          setConfirmDelete(false)
        ),
        {
          loading: `${
            modalAction === 'Delete' ? 'Deleting' : 'Rejecting'
          } review...`,
          success: `Review ${
            modalAction === 'Delete' ? 'deleted' : 'rejected'
          } successfully`,
          error: `Error ${
            modalAction === 'Delete' ? 'deleting' : 'rejecting'
          } review`,
        }
      );
    } catch (error) {
      console.log(error.code, error.message);
    }
    router.replace(router.asPath, undefined, { scroll: false });
  };

  const approveHandler = async (e) => {
    e.preventDefault();
    try {
      await toast.promise(
        updateDoc(doc(db, 'reviews', props.review.id), {
          isApproved: true,
          timestamp: serverTimestamp(),
        }).then(() => {
          setIsOpen(false);
        }),
        {
          loading: 'Approving review...',
          success: 'Review approved successfully',
          error: 'Error approving review',
        }
      );
    } catch (error) {
      console.log(error.code, error.message);
    }
    router.replace(router.asPath, undefined, { scroll: false });
  };

  return (
    <>
      <div className={styles.review}>
        <div className={styles.image}>{images[props.review.image]}</div>
        <div className={styles.content}>
          <div className={styles.row}>
            <p className={styles.username}>{props.review.username}</p>
            <div className="icons">
              {pathname === '/adminpanel/managereviews' && (
                <>
                  <Edit
                    color="#4FC3B1"
                    size={18}
                    onClick={openEditModal}
                    className="editIcon"
                  />
                  <Trash
                    color="#FF6F66"
                    size={18}
                    onClick={() => {
                      setModalAction('Delete');
                      openDeleteModal();
                    }}
                    className="trashIcon"
                  />
                </>
              )}
              {pathname === '/adminpanel/approvereviews' && (
                <>
                  <Check
                    color="#4FC3B1"
                    size={18}
                    onClick={approveHandler}
                    className="editIcon"
                  />
                  <X
                    color="#FF6F66"
                    size={18}
                    onClick={() => {
                      setModalAction('Reject');
                      openDeleteModal();
                    }}
                    className="trashIcon"
                  />
                </>
              )}
            </div>
          </div>
          <Rating
            className={styles.rating}
            initialValue={props.review.rating}
            allowHalfIcon={true}
            size={16}
            fillColor="#ffce51"
            emptyColor="#e3e3e3"
            readonly={true}
          />
          <p className={styles.description}>
            <span>“</span>
            {props.review.description}
          </p>
        </div>
      </div>

      <Modal title="Edit Review" isOpen={isOpen} closeModal={closeModal}>
        <form onSubmit={updateHandler}>
          <div className={formStyles.row}>
            {imagesOptions.map((image, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="image"
                  value={image.value}
                  key={index}
                  onChange={(e) => setImage(e.target.value)}
                />
                <div className={formStyles.image}>
                  {image.label}
                  <Check className={formStyles.check} />
                </div>
              </label>
            ))}
          </div>

          <input
            className="adminInput"
            type="text"
            name="username"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <textarea
            className="adminInput"
            placeholder="Description"
            name="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <div className={formStyles.inputsRow}>
            <Select
              className="adminInput"
              onChange={(value) => setRating(value.value)}
              options={ratingOptions}
              styles={customSelectStyles}
              placeholder="Rating"
              value={{ value: rating, label: rating }}
            />
          </div>

          <button type="submit" className="adminButton">
            Update Review
          </button>
        </form>
      </Modal>

      <DeleteModal
        action={modalAction}
        item="Review"
        isOpen={confirmDelete}
        closeModal={closeModal}
        deleteHandler={(e) => deleteHandler(e, modalAction)}
      />
    </>
  );
}
