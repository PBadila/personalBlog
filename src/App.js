import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"


import Blog from './components/Blog'
import BlogDetail from './components/BlogDetail'
import Photo from './components/Photo'
import EnterBlog from './components/EnterBlog'


import oro from './imgs/orobouros.png'
import comp from './imgs/computerScience.png'

function App() {

  
  return (
    <div className="App">
      <div className = "header">
        <div className = "headerPic">
          <img className="headerPic1" src = {oro} />
        </div>
        <div className = "headerTitle"><span className="musings">Musings</span> on the <span className="journey">Journey</span> to <span className="se">Software Engineer</span></div>
        <div className = "headerPic">
          <img className="headerPic2" src = {comp} />
        </div>
      </div>
      <Router>
       
     
      <Routes>
        
        <Route path = '/blogdetail' element = {<BlogDetail />} />
        <Route path = '/' element = {<Blog />} />
        <Route path = '/enterblog' element = {<EnterBlog />} />
      </Routes> 
      
      </Router>
    </div>
  );
}

export default App;
