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
  customSelectStyles,
  customFormStyles,
};
