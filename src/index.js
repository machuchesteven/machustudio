import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import ReactDOM from 'react-dom';

import Navigator from './components/Navigator'
import Fold from './components/Fold'
import Footer from './components/Footer'
import Designs from './components/Designs'
import DevIcon from './components/DevIcon'

ReactDOM.render(<div>
    <Navigator />
    <Fold />
    <DevIcon name="python" size='md' />
    <Footer />
</div>, document.getElementById('root'));