import { Flex, List, Title, Text } from "@mantine/core";
import { ListItem } from "./models/listItem";
import TextWithInlineTitle from "./TextWithInlineTitle";

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
            <List type={numerical ? "ordered" : 'unordered'}>
                {
                    list.map((item) => {
                        return (
                            <List.Item >
                                {item.title ? 
                                <TextWithInlineTitle title={item.title} text={item.text}/>
                                : 
                                <Text>{item.text}</Text>
                                }
                            </List.Item>
                        )
                    })
                }
            </List>
        </>
    );
}

export default TitleAndList;