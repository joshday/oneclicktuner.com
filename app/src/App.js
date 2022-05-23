import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Reviews from './components/Reviews'

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
