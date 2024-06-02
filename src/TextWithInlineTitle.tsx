import { Text } from "@mantine/core";
import styled from "styled-components";

const SmallTitle = styled.span({
    fontWeight: 'bold',
});

interface TextWithInlineTitleProps {
    title?: string;
    text: string;
}

const TextWithInlineTitle = (props: TextWithInlineTitleProps) => {
    const {title, text} = props;

    return (
        <Text>
            <SmallTitle style={{ fontWeight: 'bold' }}>
                {title}
            </SmallTitle>
            :{text}
        </Text>
    )
};

export default TextWithInlineTitle;
