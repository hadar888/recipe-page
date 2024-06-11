import { ReactNode, createContext, useEffect, useState } from "react";
import { Recipe } from "../models/recipe";
import { getRecipe } from "../api/RecipeApi";

const emptyRecipe: Recipe = {
    imgPath: '',
    name: '',
    description: '',
    preparationTime: [],
    ingredients: [],
    instructions: [],
    nutritionTable: [],
}

interface RecipeContextType {
    recipe: Recipe;
    setRecipe: React.Dispatch<React.SetStateAction<Recipe>>;
}

export const RecipeContext = createContext<RecipeContextType>({
    recipe: emptyRecipe,
    setRecipe: () => {}
});

interface RecipeProviderProps {
    children: ReactNode;
}

export const RecipeProvider = ({ children }: RecipeProviderProps) => {
    const [recipe, setRecipe] = useState<Recipe>(emptyRecipe);

    useEffect(() => {
        const fetchRecipe = async () => {
            const data: Recipe = getRecipe();
            setRecipe(data);
        };

        fetchRecipe();
    }, []);

    return (
        <RecipeContext.Provider value={{ recipe, setRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
}