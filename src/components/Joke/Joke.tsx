import React from 'react';

interface Props {
  text:string;
}

const Joke:React.FC<Props> = ({text}) => {
  return (
    <div>
      {text}
    </div>
  );
};

export default Joke;