import React from 'react';
import { Center, MantineProvider, Paper, Text } from '@mantine/core';
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider>
      <Center style={{width: '100vw', height: '100vh', backgroundColor: 'hsl(30, 54%, 90%)'}}>
        <Paper shadow="sm" radius="lg" p="xl">
          <div>img</div>
          <div>Title</div>
          <div>text</div>
          <div>text in border</div>
          <div>title and list</div>
          <div>sprate line</div>
          <div>title and list</div>
          <div>sprate line</div>
          <div>title and text and table</div>
        </Paper>
      </Center>
    </MantineProvider>
  );
}

export default App;
