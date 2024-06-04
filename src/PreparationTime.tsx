import { Container, List, Title } from "@mantine/core";
import styled from "styled-components";
import { ListItem } from "./models/listItem";
import TextWithInlineTitle from "./TextWithInlineTitle";
import { colors } from "./CommonColors";

interface PreparationTimeTitleProps {
    color: string;
}

const PreparationTimeTitle = styled(Title)<PreparationTimeTitleProps>((props: PreparationTimeTitleProps) => ({
    color: `${props.color} !important`,
    fontFamily: "'Outfit' !important" ,
    //TODO: remove important
}));

const PreparationTimeContainer = styled(Container)(() => ({
    borderRadius: 15,
    padding: '30px',
    width: '100%',
}));

interface PreparationTimeProps {
    data: ListItem[],
}

const PreparationTime  = (props: PreparationTimeProps) => {
    const { data } = props;

    return (
        <PreparationTimeContainer bg={colors.roseWhite} size="xl">
            <PreparationTimeTitle order={4} color={colors.darkRRaspberry}>Preparation time</PreparationTimeTitle>
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