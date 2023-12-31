import {useState} from 'react';
import Movies from '../components/Movies/Movies.tsx';
import Jokes from '../components/Joke/Jokes.tsx';
import ButtonMemo from '../components/Button/Button.tsx';


const App = () => {
  const [window, setWindow] = useState<boolean>(false);
  const onClick = () => {
    setWindow(prevState => !prevState);
  };
  return (
    <>
      <ButtonMemo onClick={onClick} name="Change" color="primary"/>
      {window ? <Jokes/> : <Movies/>}
    </>
  );
};

export default App;
