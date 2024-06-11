import styled from "@emotion/styled";
import { Text } from "@mantine/core";

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
