import React from 'react';
import { Center, MantineProvider, Paper, Text } from '@mantine/core';
import '@mantine/core/styles.css';
import TitleAndList from './TitleAndList';

function App() {
  return (
    <MantineProvider>
      <Center style={{width: '100vw', height: '100vh', backgroundColor: 'hsl(30, 54%, 90%)'}}>
        <Paper shadow="sm" radius="lg" p="xl">
          <div>img</div>
          <div>Title</div>
          <div>text</div>
          <div>text in border</div>
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
          <div>title and text and table</div>
        </Paper>
      </Center>
    </MantineProvider>
  );
}

export default App;
