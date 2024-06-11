import { Flex, Paper, Image, Center, CenterProps } from "@mantine/core";
import { colors } from "./CommonColors";
import AppContent from "./AppContent";
import { useMediaQuery } from "@mantine/hooks";
import styled from "@emotion/styled";

const AppCenter = styled(Center)<CenterProps>`
    background-color: ${colors.eggshell}; 
    padding: 100px 400px;

    @media only screen and (max-width: 600px) {
        padding: 0;
        background-color: ${colors.white}; 
    }
`;

const MobileContentContainer = styled.div({
    padding: '0 40px 40px 40px',
})

const AppLayout  = () => {
    const isMobile = useMediaQuery(`(max-width: 600px)`);

    return (
        <AppCenter>
            {
                isMobile ? 
                    <Flex direction="column" gap={20}>
                        <Image src='image-omelette.jpeg' alt="dish" style={{width: '100%', height:'100%'}}></Image>
                        <MobileContentContainer>
                            <Flex direction="column" gap={20}>
                                <AppContent/>
                            </Flex>
                        </MobileContentContainer>
                    </Flex>
                :
                    <Paper shadow="sm" radius='lg' p="xl">
                        <Flex direction="column" gap={20}>
                            <Image src='image-omelette.jpeg'alt="dish" radius='lg' style={{width: '100%', height:'100%'}}></Image>
                            <AppContent/>
                        </Flex>
                    </Paper>
            }
        </AppCenter>
    )
};

export default AppLayout;
