import Navigator from './components/Navigator'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'


import ComingSoon from './pages/ComingSoon'
import SoftwaresPage from './pages/SoftwaresPage'
import DesignPage from './pages/DesignPage'
import ExperiencesPage from './pages/ExperiencesPage'
import ErrorPage from "./pages/ErrorPage"
import ProjectPage from "./pages/ProjectPage"
import HomePage from "./pages/HomePage"

function App() {
  return (<>
    <Navigator />
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/design" element={<DesignPage />} />
      <Route path="/software" element={<SoftwaresPage />} />
      <Route path="/experiences" element={<ExperiencesPage />} />
      <Route path="/design/*" element={<DesignPage />} />
      <Route path="/project/*" element={<ProjectPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
    <Footer />
  </>
  )
}

export default App