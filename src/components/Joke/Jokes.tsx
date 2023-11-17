import React, {useEffect, useState} from 'react';
import Joke from './Joke.tsx';
import ButtonMemo from '../Button/Button.tsx';
import SpinnerMemo from '../Spinner/Spinner.tsx';

const url = 'https://api.chucknorris.io/jokes/random';
const Jokes = () => {
  const [listOfJokes, setListOfJokes] = useState<string[]>([]);
  const [oneJoke, setOneJoke] = useState<boolean>(false);
  const [fiveJoke, setFiveJoke] = useState<boolean>(false);
  const [state, setState] = useState<boolean>(true);
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  useEffect(() => {

    const getData = async () => {
      try {
        setShowSpinner(true);
        const response: Response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setListOfJokes([data.value]);
        }
        setShowSpinner(false);
      } catch (error: Error) {
        alert(error);
      }
    };
    if (state) {
      void getData();
    }

  }, [oneJoke]);

  useEffect(() => {
    const getDataFiveTimes = async (howMany: number = 5) => {
      setShowSpinner(true);
      const responseArr: Promise<object>[] = [];
      for (let i = 0; i < howMany; i++) {
        responseArr.push(fetch(url));
      }

      try {
        await Promise.all(responseArr).then((response: Response[]) => {
          setListOfJokes([]);
          response.forEach(async (answer: Response) => {
            if (answer.ok) {
              let data = await answer.json();
              setListOfJokes(prevState => [...prevState, data.value]);
            }
          });
        });
        setShowSpinner(false);
      } catch (error: Error) {
        alert(error);
      }
    };
    if (!state) {
      void getDataFiveTimes();
    }
  }, [fiveJoke]);

  const getOneJoke = () => {
    setState(true);
    setOneJoke(prevState => !prevState);
  };

  const getFiveJokes = () => {
    setState(false);
    setFiveJoke(prevState => !prevState);
  };

  const jokes = listOfJokes.map((item: string, index: number) => <Joke key={index} text={item}/>);

  return (
    <>
      <ButtonMemo onClick={getOneJoke} name="Get One joke"/>
      <ButtonMemo onClick={getFiveJokes} name="Get Five Jokes"/>

      {showSpinner? <SpinnerMemo show={showSpinner}/> : jokes}
    </>
  );
};

export default Jokes;