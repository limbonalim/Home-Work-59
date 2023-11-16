import React, {useEffect, useState} from 'react';
import Joke from './Joke.tsx';
import AddButtonMemo from './AddButton/AddButton.tsx';

const url = 'https://api.chucknorris.io/jokes/random';
const Jokes = () => {
  const [listOfJokes, setListOfJokes] = useState<string[]>([]);
  const [oneJoke, setOneJoke] = useState<boolean>(false);
  const [fiveJoke, setFiveJoke] = useState<boolean>(false);
  const [state, setState] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const response: Response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setListOfJokes([data.value]);
      }
    };
    if (state) {
      void getData();
    }

  }, [oneJoke]);

  useEffect(() => {
    const getDataFiveTimes = (howMany: number = 5) => {
      const responseArr: Promise<object>[] = [];
      for (let i = 0; i < howMany; i++) {
        responseArr.push(fetch(url));
      }
      Promise.all(responseArr).then((response: Response[]) => {
        setListOfJokes([]);
        response.forEach(async (answer: Response) => {
          if (answer.ok) {
            let data = await answer.json();
            setListOfJokes(prevState => [...prevState, data.value]);
          }
        });
      });
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
      <AddButtonMemo onClick={getOneJoke} name="Get One joke"/>
      <AddButtonMemo onClick={getFiveJokes} name="Get Five Jokes"/>
      {jokes}
    </>
  );
};

export default Jokes;