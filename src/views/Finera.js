import { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';
import Input from 'components/atoms/Input/Input';
import axios from 'axios';

const Finera = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputData, setInputData] = useState('');

  const sendQuery = (query) => {
    axios
      .get(
        'https://api.nasa.gov/planetary/natural?api_key=8ktJZCexrmeN9NO9FGzQbgr9QDmBG6pBkNLGBfkV',
      )
      .then((res) => setInputData(res.data.explanation));
  };

  const delayedSearch = useCallback(
    debounce((q) => sendQuery(q), 1000),
    [],
  );

  const handleChange = (event) => {
    setInputValue(event.target.value);
    delayedSearch(event.target.value);
  };
  return (
    <>
      <input value={inputValue} onChange={handleChange} />
      <p>{inputData}</p>
    </>
  );
};

export default Finera;
