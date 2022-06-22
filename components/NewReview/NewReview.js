import React, { useState } from 'react';
import Select from 'react-select';
import { ratingOptions, customSelectStyles } from '../AdminForms/AdminForms';
import formStyles from '../AdminForms/AdminForms.module.css';

export default function NewReview(props) {
  const [description, setDescription] = useState('');
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);

  const postHandler = async (e) => {
    setDescription('');
    setUsername('');
    setRating(0);
    setImage(null);
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="adminHeading">
        Create a new
        <br />
        Review
      </h1>
      <div>
        <form onSubmit={postHandler}>
          <div className={formStyles.inputs}>
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
                className={`adminInput ${formStyles.first}`}
                onChange={setRating}
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
