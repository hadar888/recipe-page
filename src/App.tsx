import React from 'react';
import { MantineProvider, Title, List, createTheme, Text } from '@mantine/core';
import '@mantine/core/styles.css';
import { colors } from './CommonColors';
import AppLayout from './AppLayout';

export const theme = createTheme({
  fontFamily: 'Outfit',
  components: {
    Title: Title.extend({
      defaultProps: {
        order: 2,
      },
      styles: {
        root: {
          fontFamily: 'Young Serif',
          color: colors.nutmeg,
        }
      }
    }),
    List: List.extend({
      defaultProps: {
        spacing: 3,
      },
      styles:{
        root:{
          fontSize: '12px',
          color: colors.nutmeg,
        },
        itemLabel: {
          paddingLeft: '10px',
        },
      }
    }),
    Text: Text.extend({
      styles: {
        root: {
          color: colors.wengeBrown,
        }
      }
    })
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <AppLayout/>
    </MantineProvider>
  );
}

export default App;
