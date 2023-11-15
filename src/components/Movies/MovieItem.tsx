import React from 'react';

interface Props {
  name: string;
  onDelete: () => void;
}

const MovieItem: React.FC<Props> = ({name, onDelete}) => {
  return (
    <div className="input-group mb-3">
      {/*<input value={name} type="text" className="form-control" aria-label="Movie' name" aria-describedby="button"/>*/}
        <button className="btn btn-outline-danger" type="button" id="button">Delete</button>
    </div>
  );
};

export default MovieItem;