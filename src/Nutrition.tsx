import { Title, Text, Table } from "@mantine/core";
import { TableRow } from "./models/tableRow";

interface NutritionProps {
    nutritionTable: TableRow[]; 
}

const Nutrition = (props: NutritionProps) => {
    const { nutritionTable } = props;

    return (
        <>
            <Title>Nutrition</Title>
            <Text>The table below shows nutritional values per serving without the additional fillings.</Text>
            <Table>
                <Table.Tbody>
                    {
                        nutritionTable.map((item) => {
                            return (
                                <Table.Tr key={item.name}>
                                    <Table.Td>{item.name}</Table.Td>
                                    <Table.Td>
                                        <Text fw={700}>{item.value}</Text>
                                    </Table.Td>
                                </Table.Tr>
                            )
                        })
                    }
                </Table.Tbody>
            </Table>
        </>
    )
};

export default Nutrition;
