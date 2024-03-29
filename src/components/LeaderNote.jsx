import { Box, Text, Heading } from "@chakra-ui/react";

function LeaderNote() {
    return (<>
        <Box p={{ base: 0, md: 5 }} bg={'black'}>
            <Box className="container" minH={'70vh'} borderBottomRadius={'lg'} borderTopLeftRadius={'lg'} borderTopRightRadius={0} borderWidth={1} borderColor={'#2008c4'}>
                <Heading my={5} textAlign={'center'}>Hear from Our Founder</Heading>
                <Text textAlign={'center'}></Text>
            </Box>
        </Box>
    </>
    )
}

export default LeaderNote;