import { TextField, Paper, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useState } from 'react';
import type { Todo } from '../../App';
const DEFAULT_VALUE = { name: '', description: '' };
interface PanelProps {
  onAddTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}
export const Panel: React.FC<PanelProps> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState(DEFAULT_VALUE);
  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const onClick = () => {
    onAddTodo(inputValue);
    setInputValue(DEFAULT_VALUE);
  };
  return (
    <Paper elevation={3} sx={{ padding: '25px 30px', display: 'flex', gap: '10px' }}>
      <TextField onChange={onChangeValue} sx={{ width: '100%' }} name="name" value={inputValue.name} id="outlined-basic" label="Название" variant="outlined" />
      <TextField onChange={onChangeValue} sx={{ width: '100%' }} name="description" value={inputValue.description} id="outlined-basic" label="Описание" variant="outlined" />
      {!!inputValue.name.length && (
        <Button onClick={onClick} sx={{ width: '50%', outline: 'none' }} variant="outlined" endIcon={<Add />}>
          Добавить
        </Button>
      )}
    </Paper>
  );
};
