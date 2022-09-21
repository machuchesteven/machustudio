import { Text, Container } from '@chakra-ui/react'
import { Col, Row, Grid } from 'react-bootstrap'
import '../styles/SkillCard.css'
import DevIcon from './DevIcon'
const SkillCard = (props) => {
    return 
        <Container maxWidth={'2xl'} m={2} borderWidth={1} borderColor="grey.700" p={2} className='h-md-5'>
            <DevIcon name={props.iconName} />
            <Text>{props.name}</Text>
            <Text as={'span'} size={'lg'}>65% | {props.projects} projects</Text>
        </Container>
}

export default SkillCard;