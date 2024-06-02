import React from 'react';
import { Center, MantineProvider, Paper, Title, List, createTheme, Divider, Image, Text, Flex } from '@mantine/core';
import '@mantine/core/styles.css';
import TitleAndList from './TitleAndList';
import Nutrition from './Nutrition';
import PreparationTime from './PreparationTime';
import styled from 'styled-components';

export const theme = createTheme({
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
  fontFamily: 'Outfit',
  components: {
    Title: Title.extend({
      defaultProps: {
        order: 2,
      },
      styles: {
        root: {
          fontFamily: 'Young Serif',
          color: 'hsl(14, 45%, 36%)',
          //TODO: should use color from theme or other way
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
          color: 'hsl(14, 45%, 36%)'
        },
        itemLabel: {
          paddingLeft: '10px',
        },
      }
    }),
    Text: Text.extend({
      styles: {
        root: {
          color: 'hsl(30, 10%, 34%)',
        }
      }
    })
  },
});

const MainTitle = styled(Title)({
  color: 'black !important',
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Center style={{backgroundColor: theme.other?.customColors.Eggshell, padding: '100px 400px'}}>
        <Paper shadow="sm" radius="lg" p="xl">
          <Flex direction="column" gap={20}>
            <Image src='image-omelette.jpeg' radius="lg"></Image>
            <MainTitle order={1}>Simple Omelette Recipe</MainTitle>
            <Text>  
              An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
              to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </Text>
            <PreparationTime data={[
              {title: 'Total', text: ' Approximately 10 minutes'},
              {title: 'Preparation', text: ' 5 minutes'},
              {title: 'Cooking', text: ' 5 minutes'},]
            }
            />
            <TitleAndList title='Ingredients' list={[
              {text: '2-3 large eggs'},
              {text: 'Salt, to taste'},
              {text: 'Pepper, to taste'},
              {text: '1 tablespoon of butter or oil'},
              {text: 'Optional fillings: cheese, diced vegetables, cooked meats, herbs'},
            ]} />
            <Divider my="md" />
            <TitleAndList numerical title='Instructions' list={[
              {title: 'Beat the eggs', text: ' In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.'},
              {title: 'Heat the pan', text: ' Place a non-stick frying pan over medium heat and add butter or oil.'},
              {title: 'Cook the omelette', text: ' Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.'},
              {title: 'Add fillings (optional)', text: ' When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.'},
              {title: 'Fold and serve', text: ' As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.'},
              {title: 'Enjoy', text: ' Serve hot, with additional salt and pepper if needed.'},
            ]} />
            <Divider my="md" />
            <Nutrition nutritionTable={[
                {name: 'Calories', value: '277kcal'},
                {name: 'Carbs', value: '0g'},
                {name: 'Protein', value: '20g'},
                {name: 'Fat', value: '22g'},
            ]}/>
          </Flex>
        </Paper>
      </Center>
    </MantineProvider>
  );
}

export default App;
