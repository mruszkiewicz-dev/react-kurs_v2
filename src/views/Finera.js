import { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';
import axios from 'axios';

const Finera = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputData, setInputData] = useState('');

  const sendQuery = (query) => {
    axios.get(`http://localhost:9000/api/listy/${query}`).then((res) => console.log(res.data));
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
      <p>s</p>
    </>
  );
};

export default Finera;
