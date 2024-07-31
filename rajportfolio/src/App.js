import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Skills from './Skills';
import Projects from './Projects';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/skills' element={<Skills />}></Route>
      <Route path='/projects' element={ <Projects/>}></Route>
      </Routes>
      </div>
  );
}

export default App;
