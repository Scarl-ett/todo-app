import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';
import React from 'react';

const TodoListItem = ({todo, onRemove, onToggle}) => {
  const {id, text, checked} = todo; 

  return (
    <div className='TodoListItem'>
      <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
}

export default React.memo(TodoListItem);
// React.memo를 사용하면 todo, onRemove, onToggle이 바뀌지 않으면 리렌더링을 하지 않는다.