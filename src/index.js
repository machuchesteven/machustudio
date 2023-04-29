import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, Heading, Text, Button } from '@chakra-ui/react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App'

const Website = () => {

    return (
        <ChakraProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    )
}

const root = createRoot(document.getElementById('root'));

root.render(<Website />);