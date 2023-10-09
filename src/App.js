import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Pricing from './Pages/Pricing';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Team from './Pages/Team';
import Testimonials from './Pages/Testimonials';
import Deepdropdown from './Pages/Deepdropdown';
import Aboutus from './Pages/Aboutus';
import Navbar from './Components/Common/Navbar';
import Footer from './Components/Common/Footer';
import Portfoliodetails from './Pages/Portfoliodetails';
import Blogsingle from './Pages/Blogsingle';

function App() {
  return (
    <>
    <Router>
        {/* <Topbar /> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/portfolio-details' element={<Portfoliodetails/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/blogsingle' element={<Blogsingle/>} />
          <Route path='/contact' element={<Contact/>} />

          <Route path='/aboutus' element={<Aboutus/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/testimonials' element={<Testimonials/>} />
          <Route path='/dropdown' element={<Deepdropdown/>} />

        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;
