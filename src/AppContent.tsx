import React, { useContext } from 'react';
import { Title, Divider, Text } from '@mantine/core';
import '@mantine/core/styles.css';
import TitleAndList from './TitleAndList';
import Nutrition from './Nutrition';
import PreparationTime from './PreparationTime';
import { colors } from './CommonColors';
import styled from '@emotion/styled'
import { RecipeContext } from './contexts/RecipeContext';

const MainTitle = styled(Title)({
    color: `${colors.darkCharcoal} !important`,
});

const AppContent = () => {
    const { recipe } = useContext(RecipeContext);
    
    return (
        <>
            <MainTitle order={1}>{recipe.name} Recipe </MainTitle>
            <Text> {recipe.description} </Text>
            <PreparationTime data={recipe.preparationTime} />
            <TitleAndList title='Ingredients' list={recipe.ingredients} />
            <Divider my="md" />
            <TitleAndList numerical title='Instructions' list={recipe.instructions} />
            <Divider my="md" />
            <Nutrition nutritionTable={recipe.nutritionTable}/>
        </>
    )
}

export default AppContent;
