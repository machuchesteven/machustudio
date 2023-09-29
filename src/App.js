import Navigator from './components/Navigator'
import Footer from './components/Footer';
import { Stack, Box } from '@chakra-ui/react';
import { Routes, Route, Outlet } from 'react-router-dom'


import ComingSoon from './pages/ComingSoon'
import SoftwaresPage from './pages/SoftwaresPage'
import DesignPage from './pages/DesignPage'
import ExperiencesPage from './pages/ExperiencesPage'
import ErrorPage from "./pages/ErrorPage"
import ProjectPage from "./pages/ProjectPage"
import HomePage from "./pages/HomePage"

function Navigation() {
  return (
    <>
      <Stack minH={'100vh'} direction={'column'}>
        <Navigator />
        <Box paddingTop={40} minH={'40vh'}>
          <Outlet />
        </Box>
        <Footer />
      </Stack>
    </>
  )
}

function App() {
  return (<>
    <Routes>
      <Route path="" element={<Navigation />} >
        <Route path='/' element={<HomePage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/software" element={<SoftwaresPage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/design/*" element={<DesignPage />} />
        <Route path="/project/*" element={<ProjectPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </>
  )
}

export default App;