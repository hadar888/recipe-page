import { Container, List, Title, Text, Flex } from "@mantine/core";
import { theme } from "./App";
import styled from "styled-components";
import { ListItem } from "./models/listItem";
import TextWithInlineTitle from "./TextWithInlineTitle";

interface PreparationTimeTitleProps {
    color: string;
}

const PreparationTimeTitle = styled(Title)<PreparationTimeTitleProps>((props: PreparationTimeTitleProps) => ({
    color: props.color,
}));

const PreparationTimeContainer = styled(Container)(() => ({
    borderRadius: 15,
    padding: '30px',
}));

interface PreparationTimeProps {
    data: ListItem[],
}

const PreparationTime  = (props: PreparationTimeProps) => {
    const { data } = props;

    return (
        <PreparationTimeContainer bg={theme.other?.customColors.RoseWhite} size="xl">
            <PreparationTimeTitle order={4} color={theme.other?.customColors.DarkRRaspberry}>Preparation time</PreparationTimeTitle>
            <List spacing={5}>
            {
                data.map((item) => {
                    return (
                        <List.Item>
                            <TextWithInlineTitle title={item.title} text={item.text}/>
                        </List.Item>
                    )
                })
            }
            </List>
        </PreparationTimeContainer>
    );
};

export default PreparationTime;