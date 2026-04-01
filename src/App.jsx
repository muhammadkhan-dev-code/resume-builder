import { useSelector } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ResumeProvider } from './context/ResumeContext'
import Builder from './pages/Builder'
import LandingPage from './pages/LandingPage'

function App () {
  const themeMode = useSelector(state => state.theme.mode)

  return (
    <ResumeProvider>
      <Router>
        <div
          className={`min-h-screen transition-colors duration-300 ${
            themeMode === 'dark'
              ? 'bg-zinc-900 text-zinc-100'
              : 'bg-slate-100 text-slate-900'
          }`}
        >
          <Navbar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/builder' element={<Builder />} />
          </Routes>
        </div>
      </Router>
    </ResumeProvider>
  )
}

export default App
