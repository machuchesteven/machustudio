import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import ReactDOM from 'react-dom';

import Navigator from './components/Navigator'
import Fold from './components/Fold'
import Footer from './components/Footer'
import Designs from './components/Designs'
import SkillCard from './components/SkillCard'
import Newsletter from './components/Newsletter'

import { ChakraProvider } from '@chakra-ui/react'
import Services from './components/Services';


ReactDOM.render(<div>
    <ChakraProvider>
        <Navigator />
        <Fold />
        <Designs />
        <SkillCard name="python" projects={25} iconName="python" />
        <Services />
        <Newsletter />
        <Footer />
    </ChakraProvider>
</div>, document.getElementById('root'));