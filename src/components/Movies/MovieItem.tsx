import React, {useState} from 'react';
import {Movie} from './types';

interface Props {
  movie: Movie;
  onDelete: (name: string, id: number) => void;
  onChange: (id: number, newName: string) => void;
}

const MemoMovieItem: React.FC<Props> = React.memo(function MovieItem({movie, onDelete, onChange}) {
  const [currentName, setCurrentName] = useState<string>(movie.name);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentName(event.target.value);
    onChange(movie.id, event.target.value);
  };

  return (
    <div className="input-group mb-3">
      <input
        onChange={onNameChange}
        value={currentName}
        type="text"
        className="form-control"
        aria-label="Movie' name"
        aria-describedby="button"
      />
      <button
        onClick={() => onDelete(movie.name, movie.id)}
        className="btn btn-outline-danger"
        type="button"
        id="button"
      >Delete
      </button>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.movie.name === nextProps.movie.name;
});

export default MemoMovieItem;