import React from 'react';

import { Input, Button } from '../Styles/searchFormStyled';

const SearchForm = (props) => {
  const [value, setValue] = React.useState('');

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  const submitValue = (e) => {
    if (isNaN(value) && value.length < 3) {
      alert('Please enter name of three or more characters');
    } else {
      e.preventDefault();
      props.onSubmit(value);
      setValue('');
    }
  };

  return (
    <div>
      <form>
        <Input
          type="text"
          placeholder={props.placeholder}
          value={value}
          onChange={changeValue}
          autoComplete="off"
        />
        <Button onClick={e => { submitValue(e) }}>
          {props.buttonText}
        </Button>
      </form>
    </div>
  )
}

export default SearchForm;
