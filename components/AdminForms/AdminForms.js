import { ReactComponent as Female1 } from '../../assets/Avatars/Female1.svg';
import { ReactComponent as Female2 } from '../../assets/Avatars/Female2.svg';
import { ReactComponent as Female3 } from '../../assets/Avatars/Female3.svg';
import { ReactComponent as Female4 } from '../../assets/Avatars/Female4.svg';
import { ReactComponent as Male1 } from '../../assets/Avatars/Male1.svg';
import { ReactComponent as Male2 } from '../../assets/Avatars/Male2.svg';
import { ReactComponent as Male3 } from '../../assets/Avatars/Male3.svg';
import { ReactComponent as Male4 } from '../../assets/Avatars/Male4.svg';
import dynamic from "next/dynamic";

const daysOptions = [...Array(7)].map((x, i) => {
  const days = `${i + 1}-${i == 0 ? 'Day' : 'Days'}/Week`;
  return {
    value: i + 1,
    label: days,
  };
});

const budgetOptions = [...Array(20)].map((x, i) => {
  const budget = `${((i + 1) * 5000).toLocaleString()}-PKR/Month`;
  return {
    value: (i + 1) * 5000,
    label: budget,
  };
});

const timeOptions = [...Array(24)].map((x, i) => {
  const time = `${i + 1}-${i == 0 ? 'Hour' : 'Hours'}/Day`;
  return {
    value: i + 1,
    label: time,
  };
});

const ratings = [5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5];
const ratingOptions = ratings.map((x, i) => {
  return {
    value: x,
    label: x,
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

// const images = {
//   f1: <Female1 />,
//   f2: <Female2 />,
//   f3: <Female3 />,
//   f4: <Female4 />,
//   m1: <Male1 />,
//   m2: <Male2 />,
//   m3: <Male3 />,
//   m4: <Male4 />,
// };

const getImage = (str)=> {
  let Image

  switch(str) {
    case "m1":
      Image = dynamic(() => import('../../assets/Avatars/Male1.svg').then(module => module.ReactComponent),);
      break
    case "m2":
      Image = dynamic(() => import('../../assets/Avatars/Male2.svg').then(module => module.ReactComponent),);
      break
    case "m3":
      Image = dynamic(() => import('../../assets/Avatars/Male3.svg').then(module => module.ReactComponent),);
      break
    case "m4":
      Image = dynamic(() => import('../../assets/Avatars/Male4.svg').then(module => module.ReactComponent),);
      break
    case "f1":
      Image = dynamic(() => import('../../assets/Avatars/Female1.svg').then(module => module.ReactComponent),);
      break
    case "f2":
      Image = dynamic(() => import('../../assets/Avatars/Female2.svg').then(module => module.ReactComponent),);
      break
    case "f3":
      Image = dynamic(() => import('../../assets/Avatars/Female3.svg').then(module => module.ReactComponent),);
      break
    case "f4":
      Image = dynamic(() => import('../../assets/Avatars/Female4.svg').then(module => module.ReactComponent),);
      break
    default:
      Image = dynamic(() => import('../../assets/Avatars/Male1.svg').then(module => module.ReactComponent),);
      // code block
  }
  return <Image/>
}

const customToggleOffStyles = {
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  height: '100%',
  color: '#ffebe5',
  padding: 0,
  fontSize: '1rem',
  paddingRight: 18,
};

const customToggleOnStyles = {
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  color: '#e2f8f3',
  padding: 0,
  fontSize: '1rem',
  paddingLeft: 18,
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
  getImage,
  customToggleOffStyles,
  customToggleOnStyles,
  customSelectStyles,
};
