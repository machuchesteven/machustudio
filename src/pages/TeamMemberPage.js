import React from 'react'
import { Heading, Text } from '@chakra-ui/react'
import {Container} from 'react-bootstrap'


const TeamMemberPage = () => {
  return (<Container>
    <Heading>
      Team Member Name: CEO
    </Heading>
    <Text as={'i'}>CEO and Co-Founder Since 20XX</Text>
    </Container>
  )
}

export default TeamMemberPage