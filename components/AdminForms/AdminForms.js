import { ReactComponent as Female1 } from '../../assets/Avatars/Female1.svg';
import { ReactComponent as Female2 } from '../../assets/Avatars/Female2.svg';
import { ReactComponent as Female3 } from '../../assets/Avatars/Female3.svg';
import { ReactComponent as Female4 } from '../../assets/Avatars/Female4.svg';
import { ReactComponent as Male1 } from '../../assets/Avatars/Male1.svg';
import { ReactComponent as Male2 } from '../../assets/Avatars/Male2.svg';
import { ReactComponent as Male3 } from '../../assets/Avatars/Male3.svg';
import { ReactComponent as Male4 } from '../../assets/Avatars/Male4.svg';
import formStyles from '../AdminForms/AdminForms.module.css';

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
    label: <Male1 className={formStyles.avatar} />,
  },
  {
    value: 'm2',
    label: <Male2 className={formStyles.avatar} />,
  },
  {
    value: 'm3',
    label: <Male3 className={formStyles.avatar} />,
  },
  {
    value: 'm4',
    label: <Male4 className={formStyles.avatar} />,
  },
  {
    value: 'f1',
    label: <Female1 className={formStyles.avatar} />,
  },
  {
    value: 'f2',
    label: <Female2 className={formStyles.avatar} />,
  },
  {
    value: 'f3',
    label: <Female3 className={formStyles.avatar} />,
  },
  {
    value: 'f4',
    label: <Female4 className={formStyles.avatar} />,
  },
];

const images = {
  f1: <Female1 />,
  f2: <Female2 />,
  f3: <Female3 />,
  f4: <Female4 />,
  m1: <Male1 />,
  m2: <Male2 />,
  m3: <Male3 />,
  m4: <Male4 />,
};

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
    marginLeft: '36px',
  }),

  singleValue: (provided, state) => ({
    ...provided,
    color: '#3d6b98',
    marginLeft: '36px',
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

export {
  daysOptions,
  budgetOptions,
  timeOptions,
  ratingOptions,
  imagesOptions,
  images,
  customSelectStyles,
};
