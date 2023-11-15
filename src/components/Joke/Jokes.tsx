import React, {useEffect, useState} from 'react';
import Joke from './Joke.tsx';

const url = 'https://api.chucknorris.io/jokes/random';
const Jokes = () => {
  const [listOfJokes, setListOfJokes] = useState('');
  const [state, seState] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setListOfJokes(data.value);
      }
    };

      void getData();
  }, [state]);

  const onClick = () => {
    seState(prevState => !prevState);
  }

  return (
    <>
      <button
        className="btn btn-success"
        onClick={onClick}
      >Get Joke</button>
      <Joke text={listOfJokes}/>
    </>
  );
};

export default Jokes;