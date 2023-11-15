import React, {useState} from 'react';
import MemoMovieItem from './MovieItem.tsx';
import MovieForm from './MovieForm/MovieForm.tsx';
import {Movie} from './types';


const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

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

  let listOfMovie: React.JSX.Element[] | null;

  if (movies.length > 0) {
    listOfMovie = movies.map((movie) =>
      <MemoMovieItem
        key={movie.id}
        movie={movie}
        onDelete={onDelete}
        onChange={onChange}
      />
    );
  }

  return (
    <>
      <MovieForm onSubmit={onSubmit}/>
      <div>
        {movies.length ? listOfMovie : <div>Add some movie</div>}
      </div>
    </>
  );
};

export default Movies;