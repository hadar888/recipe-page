import { ListItem } from "./listItem";
import { TableRow } from "./tableRow";

export interface Recipe {
    imgPath: string;
    name: string;
    description: string;
    preparationTime: ListItem[];
    ingredients: ListItem[];
    instructions: ListItem[];
    nutritionTable: TableRow[];
}
