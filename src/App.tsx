import React from 'react';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { colors } from './CommonColors';
import AppLayout from './AppLayout';
import { RecipeProvider } from './contexts/RecipeContext';

export const theme = createTheme({
  fontFamily: 'Outfit',
  components: {
    Title: {
      defaultProps: {
        order: 2,
      },
      styles: {
        root: {
          fontFamily: 'Young Serif',
          color: colors.nutmeg,
        }
      }
    },
    List: {
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
    },
    Text:{
      styles: {
        root: {
          color: colors.wengeBrown,
        }
      }
    },
  },
});

function App() {
  return (
    <MantineProvider theme={theme} >
      <RecipeProvider>
        <AppLayout/>
      </RecipeProvider>
    </MantineProvider>
  );
}

export default App;
