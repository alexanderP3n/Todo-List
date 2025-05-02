import './App.css';
import { Box } from '@mui/material';
import { Header, Panel, TodoList } from './components';
import { useState } from 'react';
export type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};
function App() {
  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const onEdit = (id: Todo['id']) => {
    setEditTodoId(id);
  };
  const onDeliteTodo = (id: Todo['id']) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const onAddTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    const newId = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;
    setTodoList([...todoList, { id: newId, name, description, checked: false }]);
  };

  const onCheckedTodo = (id: Todo['id']) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      }),
    );
  };

  const onChangeTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === editTodoId) {
          return { ...todo, name, description };
        }
        return todo;
      }),
    );
    setEditTodoId(null);
  };
  return (
    <Box sx={{ minWidth: '700px', display: 'flex', flexDirection: 'column', rowGap: '30px' }}>
      <Header />
      <Panel onAddTodo={onAddTodo} />
      <TodoList editTodoId={editTodoId} onCheckedTodo={onCheckedTodo} todoList={todoList} onDeliteTodo={onDeliteTodo} onEdit={onEdit} onChangeTodo={onChangeTodo} />
    </Box>
  );
}

export default App;
