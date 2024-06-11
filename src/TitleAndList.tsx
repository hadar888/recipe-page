import { List, Title, Text } from "@mantine/core";
import { ListItem } from "./models/listItem";
import TextWithInlineTitle from "./TextWithInlineTitle";
import { v4 as uuidv4 } from 'uuid';
import styled from "@emotion/styled";

interface NumericalOrPointsListProps {
    $isNumerical: boolean;
}

const NumericalOrPointsList = styled(List)<NumericalOrPointsListProps>((props: NumericalOrPointsListProps) => ({
    fontSize: props.$isNumerical ? '15px !important' : 'unset',
    fontWeight: props.$isNumerical ? 'bold !important' : 'unset',
}));

interface TitleAndListProps{
    title: string;
    list: ListItem[];
    numerical?: boolean;
}

const TitleAndList = (props: TitleAndListProps) => {
    const { title, list, numerical } = props;

    return (
        <>
            <Title>{title}</Title>
            <NumericalOrPointsList $isNumerical={!!numerical} type={numerical ? "ordered" : 'unordered'}>
            {
                list.map((item) => {
                    return (
                        <List.Item key={uuidv4()}>
                            {item.title ? 
                            <TextWithInlineTitle title={item.title} text={item.text}/>
                            : 
                            <Text>{item.text}</Text>
                            }
                        </List.Item>
                    )
                })
            }
            </NumericalOrPointsList>
        </>
    );
}

export default TitleAndList;