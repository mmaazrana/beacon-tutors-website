import { ReactComponent as Female1 } from '../../assets/Avatars/Female1.svg';
import { ReactComponent as Female2 } from '../../assets/Avatars/Female2.svg';
import { ReactComponent as Female3 } from '../../assets/Avatars/Female3.svg';
import { ReactComponent as Female4 } from '../../assets/Avatars/Female4.svg';
import { ReactComponent as Male1 } from '../../assets/Avatars/Male1.svg';
import { ReactComponent as Male2 } from '../../assets/Avatars/Male2.svg';
import { ReactComponent as Male3 } from '../../assets/Avatars/Male3.svg';
import { ReactComponent as Male4 } from '../../assets/Avatars/Male4.svg';

const daysOptions = [...Array(7)].map((x, i) => {
  const days = `${i + 1} ${i == 0 ? 'Day' : 'Days'}/Week`;
  return {
    value: days,
    label: days,
  };
});

const budgetOptions = [...Array(20)].map((x, i) => {
  const budget = `${((i + 1) * 5000).toLocaleString()} PKR/Month`;
  return {
    value: budget,
    label: budget,
  };
});

const timeOptions = [...Array(24)].map((x, i) => {
  const time = `${i + 1} ${i == 0 ? 'Hour' : 'Hours'}/Day`;
  return {
    value: time,
    label: time,
  };
});

const ratingOptions = [...Array(5)].map((x, i) => {
  return {
    value: i + 1,
    label: i + 1,
  };
});

const imagesOptions = [
  {
    value: 'm1',
    label: <Male1 />,
  },
  {
    value: 'm2',
    label: <Male2 />,
  },
  {
    value: 'm3',
    label: <Male3 />,
  },
  {
    value: 'm4',
    label: <Male4 />,
  },
  {
    value: 'f1',
    label: <Female1 />,
  },
  {
    value: 'f2',
    label: <Female2 />,
  },
  {
    value: 'f3',
    label: <Female3 />,
  },
  {
    value: 'f4',
    label: <Female4 />,
  },
];

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    boxShadow: '0 4px 40px rgba(93, 143, 193, 0.25)',
    borderRadius: '0.6rem',
    padding: '0.25rem 0',
  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: '#a1bedb',
    fontWeight: '500',
  }),

  singleValue: (provided, state) => ({
    ...provided,
    color: '#3d6b98',
  }),

  option: (provided, state) => ({
    ...provided,
    // to do
    // backgroundColor: state.isSelected && '#a1bedb',
    // border on focus?
  }),

  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#a1bedb',
    '&:hover': { color: '#3d6b98' },
  }),
};

const customFormStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(161, 190, 219, 0.75)',
  },
  content: {
    top: '12%',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
    padding: '0',
    height: 'fit-content',
    borderRadius: '0.75rem',
    border: '2px solid #a1bedb',
  },
};

export {
  daysOptions,
  budgetOptions,
  timeOptions,
  ratingOptions,
  imagesOptions,
  customSelectStyles,
  customFormStyles,
};
