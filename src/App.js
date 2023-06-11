import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"


import Blog from './components/Blog'
import BlogDetail from './components/BlogDetail'
import Photo from './components/Photo'
import EnterBlog from './components/EnterBlog'
import Home from './components/Home'

import oro from './imgs/orobouros.png'
import comp from './imgs/computerScience.png'

function App() {

  
  return (
    <div className="App">
      {/* <div className = "header">
        <div className = "headerPic">
          <img className="headerPic1" src = {oro} />
        </div>
        <div className = "headerTitle"><span className="musings">Musings</span> on the <span className="journey">Journey</span> to <span className="se">Software Engineer</span></div>
        <div className = "headerPic">
          <img className="headerPic2" src = {comp} />
        </div>
      </div> */}
      <Router>
       
      {/* <Blog /> */}
  
      {/* <EnterBlog />  */}
      <Routes>
        <Route exact path = '/' element = {<Home />} />
        <Route path = '/blogDetail' element = {<BlogDetail />} />
        <Route path = '/blog' element = {<Blog />} />
        <Route path = '/enterBlog' element = {<EnterBlog />} />
      </Routes> 
      <Blog />
      </Router>
    </div>
  );
}

export default App;
