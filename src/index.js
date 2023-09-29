import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App'

const Website = () => {

    return (
        <ChakraProvider>
            <BrowserRouter basename='/'>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    )
}

const root = createRoot(document.getElementById('root'));

root.render(<Website />);