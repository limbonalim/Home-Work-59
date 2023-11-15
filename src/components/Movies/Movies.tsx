import React, {useState} from 'react';
import MovieItem from './MovieItem.tsx';
import MovieForm from './MovieForm.tsx';

interface Movie {
  id: number;
  name: string;
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  console.log('[Movies] change');

  const onSubmit = (name: string) => {
    const movie: Movie = {
      id: Math.random(),
      name: name,
    };
    setMovies(prevState => [...prevState, movie]);
  };

  const onDelete = (name: string, id: number) => {
    setMovies(prevState => prevState.filter((movie) => {
      return !(movie.name === name && movie.id === id);
    }));
  };

  const onChange = (id, newName) => {
    setMovies(prevState => prevState.map((movie) => {
      if (movie.id === id) {
        movie.name = newName;
      }
      return movie;
    }));
  };

  const listOfMovie = movies.map((movie) =>
    <MovieItem
      key={movie.id}
      id={movie.id}
      name={movie.name}
      onDelete={onDelete}
      onChange={onChange}
    />
  );


  return (
    <div>
      <MovieForm onSubmit={onSubmit}/>
      <div>
        {listOfMovie}
      </div>
    </div>
  );
};

export default Movies;