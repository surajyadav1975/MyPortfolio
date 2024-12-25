import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Aboutpage from './components/Aboutpage';
import Projectpage from './components/Projectpage';
import Contactpage from './components/Contactpage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/project" element={<Projectpage/>} />
        <Route path="/contact" element={<Contactpage/>} />
      </Routes>
    </Router>
  )
}

export default App
