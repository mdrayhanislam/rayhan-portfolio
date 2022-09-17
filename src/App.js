
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About/About';
import Contract from './Pages/Home/Contract/Contract';

import Home from './Pages/Home/Home/Home';
import Portfolio from './Pages/Home/Portfolio/Portfolio';
import Skill from './Pages/Home/Skill/Skill';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contract" element={<Contract />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
