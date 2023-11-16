import React from 'react';

interface Props {
  onClick: () => void;
  name: string;
  color: 'primary' | 'success';
}

const AddButtonMemo: React.FC<Props> = React.memo(function AddButton({onClick, name, color= 'success'}) {
  const colorClass = `btn-${color}`
  const style: string[] = ['btn', 'm-2', colorClass];

  return (
    <>
      <button
        className={style.join(' ')}
        onClick={() => onClick()}
      >{name}</button>
    </>
  );
}, (prevProps, nextProps) => {
  return prevProps.name === nextProps.name;
});

export default AddButtonMemo;