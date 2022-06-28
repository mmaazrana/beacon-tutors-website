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

export default function NewReview(props) {
  const { pathname } = useRouter();
  const isAdminPage = pathname === '/admin/managereviews';
  const [image, setImage] = useState('');
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [isApproved, setIsApproved] = useState(isAdminPage ? true : false);

  const postHandler = async (e) => {
    e.preventDefault();
    setImage('');
    setUsername('');
    setDescription('');
    setRating(0);
    setIsApproved(false);
    !isAdminPage && props.closeModal();
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
                onChange={(value) => setRating(value.value)}
                options={ratingOptions}
                styles={customSelectStyles}
                placeholder="Rating"
              />
            </div>

            <button type="submit" className="adminButton">
              Post Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
