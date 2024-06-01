import { Flex, Text } from "@mantine/core";

interface TextWithInlineTitleProps {
    title?: string;
    text: string;
}

const TextWithInlineTitle = (props: TextWithInlineTitleProps) => {
    const {title, text} = props;

    return (
        <>
            <Flex gap={'xs'}>
                <Text fw={700}>{title}</Text>
                <Text>{text}</Text>
            </Flex>
        </>
    )
};

export default TextWithInlineTitle;
