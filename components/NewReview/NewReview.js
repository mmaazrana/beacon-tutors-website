import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select';
import { Check } from 'lucide-react';
import {
  ratingOptions,
  imagesOptions,
  customSelectStyles,
} from '../AdminForms/AdminForms';
import formStyles from '../AdminForms/AdminForms.module.css';
import toast from 'react-hot-toast';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function NewReview(props) {
  const { pathname } = useRouter();
  const router = useRouter();
  const isAdminPage = pathname === '/admin/managereviews';
  const [image, setImage] = useState('m1');
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [isApproved, setIsApproved] = useState(isAdminPage ? true : false);
  const [isDisabled, setIsDisabled] = useState(false);

  const postHandler = async (e) => {
    e.preventDefault();
    try {
      setIsDisabled(true);
      await toast.promise(
        addDoc(collection(db, 'reviews'), {
          image,
          username,
          description,
          rating,
          isApproved,
          timestamp: serverTimestamp(),
        }).then((docRef) => {
          console.log(docRef.id);
          // setImage('');
          setUsername('');
          setDescription('');
          setRating(0);
          setIsApproved(isAdminPage ? true : false);
          !isAdminPage && props.closeModal();
          isAdminPage &&
            router.replace(router.asPath, undefined, { scroll: false });
        }),
        {
          loading: 'Adding review...',
          success: 'Review added successfully',
          error: 'Error adding review',
        }
      );
    } catch (error) {
      console.log(error.code, error.message);
    }
    setIsDisabled(false);
  };

  return (
    <div>
      {isAdminPage && (
        <h1 className="adminHeading">
          Add a new <br />
          Review
        </h1>
      )}
      <div>
        <form onSubmit={postHandler}>
          <div className={isAdminPage ? formStyles.inputs : ''}>
            <div className={formStyles.row}>
              {imagesOptions.map((imageOption, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="image"
                    value={imageOption.value}
                    key={index}
                    onChange={(e) => setImage(e.target.value)}
                  />
                  <div className={formStyles.image}>
                    {imageOption.label}
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
                value={rating > 0 && { value: rating, label: rating }}
              />
            </div>

            <button type="submit" className="adminButton" disabled={isDisabled}>
              Post Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
