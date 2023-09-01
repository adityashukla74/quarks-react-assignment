import * as React from 'react';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function StatusBadge() {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent="center"
      alignItems="center"
    >
      <Badge color="success" badgeContent={100} >
        <FavoriteBorderIcon />
      </Badge>
      <Badge color="warning" badgeContent={10} max={999}>
        <FavoriteBorderIcon />
      </Badge>
      <Badge color="error" badgeContent={1}>
        <FavoriteBorderIcon />
      </Badge>
    </Stack>
  );
}