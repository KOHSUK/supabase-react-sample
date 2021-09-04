import React from 'react';
import { Button, Box, Container, Typography } from '@material-ui/core';
import { useAuth } from 'hooks/use-auth';

export const Channels: React.VFC = () => {
  const { signOut } = useAuth();

  const handleClick = async () => {
    await signOut();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" marginBottom={(theme) => theme.spacing(1)}>
          Channels
        </Typography>
        <Button onClick={handleClick} variant="contained">
          Sign Out
        </Button>
      </Box>
    </Container>
  );
};