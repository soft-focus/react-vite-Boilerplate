import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/providers/ThemeProvider'
import Home from './pages/Home'
import Page2 from './pages/Page2'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="echo-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App