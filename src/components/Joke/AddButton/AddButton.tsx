import React from 'react';

interface Props {
  onClick: () => void;
  name: string;
}

const AddButtonMemo: React.FC<Props> = React.memo(function AddButton({onClick, name}) {
  return (
    <>
      <button
        className="btn btn-success"
        onClick={() => onClick()}
      >{name}</button>
    </>
  );
}, (prevProps, nextProps) => {
  return prevProps.name === nextProps.name;
});

export default AddButtonMemo;