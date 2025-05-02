import { Paper, Button, TextField } from '@mui/material';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

import type { Todo } from '../../../App';

interface EditTodoItemProps {
  todo: Todo;
  onChangeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

export const EditTodoItem: React.FC<EditTodoItemProps> = ({ todo, onChangeTodo }) => {
  const [inputValue, setInputValue] = useState({ name: todo.name, description: todo.description });
  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const onClick = () => {
    onChangeTodo(inputValue);
  };
  return (
    <Paper elevation={1} sx={{ padding: '25px 30px', display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
      <TextField onChange={onChangeValue} sx={{}} name="name" value={inputValue.name} id="outlined-basic" label="Название" variant="outlined" />
      <TextField onChange={onChangeValue} sx={{}} name="description" value={inputValue.description} id="outlined-basic" label="Описание" variant="outlined" />
      <Button onClick={onClick} sx={{ outline: 'none' }} variant="outlined" endIcon={<EditIcon />}>
        Редактировать
      </Button>
    </Paper>
  );
};
