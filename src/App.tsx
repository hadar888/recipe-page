import React from 'react';
import { Center, MantineProvider, Paper, Title, List, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import TitleAndList from './TitleAndList';
import Nutrition from './Nutrition';
import PreparationTime from './PreparationTime';

export const theme = createTheme({
  components: {
    Title: Title.extend({
      defaultProps: {
        order: 2,
      },
    }),
    List: List.extend({
      defaultProps: {
        spacing: 3,
      },
      styles:{
        itemLabel: {
          paddingLeft: '10px',
        }
      }
    })
  },
  other: {
    customColors: {
      Nutmeg: 'hsl(14, 45%, 36%)',
      DarkRRaspberry: 'hsl(332, 51%, 32%)',
      White: 'hsl(0, 0%, 100%)',
      RoseWhite: 'hsl(330, 100%, 98%)',
      Eggshell: 'hsl(30, 54%, 90%)',
      LightGrey: 'hsl(30, 18%, 87%)',
      WengeBrown: 'hsl(30, 10%, 34%)',
      DarkCharcoal: 'hsl(24, 5%, 18%)',
    },
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Center style={{width: '100vw', height: '100vh', backgroundColor: theme.other?.customColors.Eggshell}}>
        <Paper shadow="sm" radius="lg" p="xl">
          <div>img</div>
          <div>Title</div>
          <div>text</div>
          <PreparationTime data={[
            {title: 'Total', text: 'Approximately 10 minutes'},
            {title: 'Preparation', text: '5 minutes'},
            {title: 'Cooking', text: '5 minutes'},]
          }
          />
          <TitleAndList title='Ingredients' list={[
            {text: '2-3 large eggs'},
            {text: 'Salt, to taste'},
            {text: 'Pepper, to taste'},
            {text: '1 tablespoon of butter or oil'},
            {text: 'Optional fillings: cheese, diced vegetables, cooked meats, herbs'},
          ]} />
          <div>sprate line</div>
          <TitleAndList numerical title='Instructions' list={[
             {title: 'Beat the eggs: ', text: 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.'},
             {title: 'Heat the pan: ', text: 'Place a non-stick frying pan over medium heat and add butter or oil.'},
             {title: 'Cook the omelette: ', text: 'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.'},
             {title: 'Add fillings (optional): ', text: 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.'},
             {title: 'Fold and serve: ', text: 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.'},
             {title: 'Enjoy: ', text: 'Serve hot, with additional salt and pepper if needed.'},
          ]} />
          <div>sprate line</div>
          <Nutrition nutritionTable={[
              {name: 'Calories', value: '277kcal'},
              {name: 'Carbs', value: '0g'},
              {name: 'Protein', value: '20g'},
              {name: 'Fat', value: '22g'},
          ]}/>
        </Paper>
      </Center>
    </MantineProvider>
  );
}

export default App;
