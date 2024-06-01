import { Flex, List, Title, Text } from "@mantine/core";
import { ListItem } from "./models/listItem";

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
            <List listStyleType={numerical ? 'decimal': 'disc'}>
                {
                    list.map((item) => {
                        return (
                            <List.Item >
                                {item.title ? 
                                <Flex gap={'xs'}>
                                    <Text fw={700}>{item.title}</Text>
                                    <Text>{item.text}</Text>
                                </Flex>
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