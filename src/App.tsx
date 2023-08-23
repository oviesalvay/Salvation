import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import Home from "../src/pages/home";
import About from '../src/pages/about';
import Project from '../src/pages/project';
import Header from '../src/components/header';


function App() {
  return (
      <BrowserRouter>
        
        <Header />
        <Routes>
          <Route  path="./" element={<Home />} />
          <Route path="about"  element={<About />} />
          <Route path="project" element={<Project />} />
          </Routes>
</BrowserRouter>
  )
}
export default App;

