
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home/Home';

import Header from './Component/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
   <Routes>
     <Route path="/" element={<Home></Home>}></Route>
   </Routes>
    </div>
  );
}

export default App;
