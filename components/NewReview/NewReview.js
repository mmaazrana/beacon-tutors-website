import React, { useState } from 'react';
import Select from 'react-select';
import { Check } from 'lucide-react';
import {
  ratingOptions,
  imagesOptions,
  customSelectStyles,
} from '../AdminForms/AdminForms';
import formStyles from '../AdminForms/AdminForms.module.css';

export default function NewReview(props) {
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);

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
        Add a new <br />
        Review
      </h1>
      <div>
        <form onSubmit={postHandler}>
          <div className={formStyles.inputs}>
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
