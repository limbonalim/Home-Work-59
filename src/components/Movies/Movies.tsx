import React, {useState} from 'react';
import MovieItem from './MovieItem.tsx';
import MovieForm from './MovieForm.tsx';

interface Movie {
  id: number;
  name: string;
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const onSubmit = (name) => {
    const movie:Movie = {
      id: Math.random(),
      name: name,
    };
    setMovies(prevState => [...prevState, movie]);
  };

  return (
    <div>
      <MovieForm onSubmit={onSubmit}/>
      <div>
        {/*<MovieItem name="First Item"/>*/}
        {/*<MovieItem name="Second Item"/>*/}
      </div>
    </div>
  );
};

export default Movies;