import React from 'react';
import { Select } from 'semantic-ui-react';
import { compose, withHandlers, pure } from 'recompose';
import PropTypes from 'prop-types';

const options = [
  {
    key: 'ru-RU',
    value: 'ru-RU',
    flag: 'ru',
    text: 'Russian',
  },
  {
    key: 'en-US',
    value: 'en-US',
    flag: 'us',
    text: 'English',
  },
];


const LanguageChange = ({ onSelect }) => (
  <Select
    placeholder="Select language"
    defaultValue={localStorage.getItem('lang')}
    onChange={onSelect}
    options={options}
  />
);

LanguageChange.propTypes = {
  onSelect: PropTypes.func,
};
LanguageChange.defaultProps = {
  onSelect() {},
};

export default compose(
  pure,
  withHandlers({
    onSelect: () => (e, { value }) => {
      if (localStorage.getItem('lang') !== value) {
        localStorage.setItem('lang', value);
        window.location.reload();
      }
    },
  }),
)(LanguageChange);

