import React from 'react';

interface Props {
  text: string;
}

const Joke: React.FC<Props> = ({text}) => {
  return (
    <div className="m-2 p-1 border border-primary rounded">
      {text}
    </div>
  );
};

export default Joke;