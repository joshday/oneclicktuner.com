import Nav from './components/Nav'
import Home from './components/Home'
import Privacy from './components/Privacy'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
