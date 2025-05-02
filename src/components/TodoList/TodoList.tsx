import { Paper, Typography } from '@mui/material';
import { TodoItem } from './Todo/TodoItem';
import type { Todo } from '../../App';
import { EditTodoItem } from './EditTodoItem/EditTodoItem';
interface TodoListProps {
  editTodoId: Todo['id'] | null;
  todoList: Todo[];
  onDeliteTodo: (id: Todo['id']) => void;
  onCheckedTodo: (id: Todo['id']) => void;
  onEdit: (id: Todo['id']) => void;
  onChangeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todoList, onDeliteTodo, onCheckedTodo, onEdit, editTodoId, onChangeTodo }) => {
  return (
    <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', boxSizing: 'border-box', padding: '30px', rowGap: '20px' }}>
      {todoList.length === 0 ? (
        <Typography variant="body1" component="p">
          Список задач пуст (
        </Typography>
      ) : (
        todoList.map((todo) => {
          if (todo.id === editTodoId) return <EditTodoItem key={todo.id} todo={todo} onChangeTodo={onChangeTodo} />;
          return <TodoItem key={todo.id} todo={todo} onDeliteTodo={onDeliteTodo} onCheckedTodo={onCheckedTodo} onEdit={onEdit} />;
        })
      )}
    </Paper>
  );
};
