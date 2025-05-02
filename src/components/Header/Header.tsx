import { Typography, Box } from '@mui/material';
interface HeaderProps {
  todoCount: number;
}
export const Header: React.FC<HeaderProps> = ({ todoCount }) => {
  return (
    <>
      <Box sx={{ padding: '30px 0' }}>
        <Typography sx={{ fontSize: 40 }} variant="h1" component="h1">
          Список задач{todoCount > 0 && `: ${todoCount}`}
        </Typography>
      </Box>
    </>
  );
};
