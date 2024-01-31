
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Resume from "./pages/Resume";

function App() {
 

  return (
    <Router>
    <Routes>
     
      <Route exact path="/" element={<Home />}></Route>
     
      <Route path="/resume" element={<Resume />} />
       {/* <Route path="/contact" component={ContactUs} /> */}
    </Routes>
  </Router>
  

  )
}

export default App
