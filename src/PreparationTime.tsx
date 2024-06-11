import { Container, List, Title } from "@mantine/core";
import { ListItem } from "./models/listItem";
import TextWithInlineTitle from "./TextWithInlineTitle";
import { colors } from "./CommonColors";
import { v4 as uuidv4 } from 'uuid';
import styled from "@emotion/styled";

interface PreparationTimeTitleProps {
    color: string;
}

const PreparationTimeTitle = styled(Title)<PreparationTimeTitleProps>((props: PreparationTimeTitleProps) => ({
    color: props.color,
    fontFamily: 'Outfit',
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
                        <List.Item key={uuidv4()}>
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