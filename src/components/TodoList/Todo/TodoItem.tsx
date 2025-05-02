import { Paper, Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import type { Todo } from '../../../App';
interface TodoItemProps {
  todo: Todo;
  onDeliteTodo: (id: Todo['id']) => void;
  onCheckedTodo: (id: Todo['id']) => void;
  onEdit: (id: Todo['id']) => void;
}
export const TodoItem: React.FC<TodoItemProps> = ({ todo, onDeliteTodo, onCheckedTodo, onEdit }) => {
  return (
    <Paper elevation={1} sx={{ padding: '25px 30px', display: 'flex', justifyContent: 'space-between', opacity: todo.checked ? '0.5' : '1' }}>
      <Box sx={{ textAlign: 'left' }}>
        <Typography onClick={() => onCheckedTodo(todo.id)} variant="h5" component="h5" sx={{ cursor: 'pointer', textDecoration: todo.checked ? 'line-through' : 'none' }}>
          {todo.name}
        </Typography>
        <Typography variant="body1" component="p">
          {todo.description}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <IconButton onClick={() => onEdit(todo.id)} aria-label="edit" size="large" color="primary">
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDeliteTodo(todo.id)} aria-label="delete" size="large" color="error">
          <DeleteIcon sx={{ outline: 'none' }} />
        </IconButton>
      </Box>
    </Paper>
  );
};
