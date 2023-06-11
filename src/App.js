import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"


import Blog from './components/Blog'
import BlogDetail from './components/BlogDetail'
import Photo from './components/Photo'
import EnterBlog from './components/EnterBlog'

function App() {

  
  return (
    <div className="App">
      <Router>
      <Blog />
  
      {/* <EnterBlog />  */}
      <Routes>
        
        <Route path = '/blogDetail' element = {<BlogDetail />} />
        <Route path = '/enterBlog' element = {<EnterBlog />} />
      </Routes> 
      </Router>
    </div>
  );
}

export default App;
