import { Typography, Box } from '@mui/material';
export const Header = () => {
  return (
    <>
      <Box sx={{ padding: '30px 0' }}>
        <Typography sx={{ fontSize: 40 }} variant="h1" component="h1">
          Todo list
        </Typography>
      </Box>
    </>
  );
};
