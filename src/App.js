import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id : i,
      text : `할 일 ${i}`, 
      checked : false,
    });
  }

  return array;
}

const App = () => {
  // const [todos, setTodos] = useState([
  //   {
  //     id : 1,
  //     text : '래액트의 기초 알아보기',
  //     checked : true,
  //   },
  //   {
  //     id : 2,
  //     text : '컴포넌트 스타일링해 보기',
  //     checked : true,
  //   },
  //   {
  //     id : 3,
  //     text : '일정 관리 앱 만들어 보기',
  //     checked : false,
  //   }
  // ]);
  const [todos, setTodos] = useState(createBulkTodos); 
  // useState(createBulkTodos())라고 작성하면 리렌더링될 때마다 createBulkTodos 함수가 호출
  // useState(createBulkTodos)라고 작성하면 처음 렌더링될 때만 creattBulkTodos 함수가 실행

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        checked : false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
};

export default App;