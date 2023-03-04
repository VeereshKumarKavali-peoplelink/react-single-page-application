import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import About from './components/About'
import Resume from './components/Resume'
import Logical from './components/Logical'
import Contact from './components/Contact'

import './App.css';


function App(){
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path ="/" element={<About/>}/>
        <Route exact path = "/resume" element={<Resume/>}/>
        <Route exact path = "/logical" element={<Logical/>} />
        <Route exact path = "/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
