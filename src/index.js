import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// pages import
import ThreeDPage from './pages/ThreeDPage';
import BrandingPage from './pages/BrandingPage';
import ProjectPage from './pages/ProjectPage';
import SoftwaresPage from './pages/SoftwaresPage';
import HirePage from './pages/ContactUsPage';


// components import
import Navigator from './components/Navigator'
import Fold from './components/Fold'
import Footer from './components/Footer'
import Designs from './components/Designs'
import SkillCard from './components/SkillCard'
import Newsletter from './components/Newsletter'

import { ChakraProvider } from '@chakra-ui/react'
import Services from './components/Services';
import PortfolioPage from './pages/PortfolioPage';
import { AnimatePresence } from 'framer-motion';

const HomePage = () => {
    return (<AnimatePresence>
        <Fold />
        <Designs />
        <SkillCard name="python" projects={25} iconName="python" />
        <Services />
        <Newsletter />
        <Footer />
    </AnimatePresence>
    )
}



ReactDOM.render(<BrowserRouter basename="/machustudio">

    <Navigator />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/2d" element={<BrandingPage />} />
        <Route path="/3d" element={<ThreeDPage />} />
        <Route path="/softwares" element={<SoftwaresPage />} />
        <Route path="/project/:name" element={<ProjectPage />} />

    </Routes>
</BrowserRouter>, document.getElementById('root'));

