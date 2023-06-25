import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import BlogDetail from './BlogDetail'
import FeaturedBlog from './FeaturedBlog'

import mini1 from '../imgs/mini1.png'
import mini2 from '../imgs/mini2.png'
import mini3 from '../imgs/mini3.png'
import mePic2 from '../imgs/mePic2.png'
import link from '../imgs/linkedIn.png'
import envelope from '../imgs/envelope.png'

const Blog = () => {
    const [ showHideBlog, setShowHideBlog ] = useState(true)
    console.log(showHideBlog)
    const hideBlog = () => {
      console.log('clicked for blog detail, hiding blog')
      setShowHideBlog(false)
    }

    const [ blogs, setBlogs ] = useState( [] )

const fetchBlogData = async () => {
  
  const response = await fetch('https://blog-fbt9.onrender.com/journals')
  const data  = await response.json()
  setBlogs(data)
  
}
useEffect( () => {
  fetchBlogData()
}, [])
console.log(blogs)
let featureBlog = blogs[0]
console.log(featureBlog)

console.log(blogs)
let miniFeatBlog=[]
blogs.forEach(blog => {
  if(blog.id===9 || blog.id===10 || blog.id===11){
    miniFeatBlog.push(blog)
  }
});
console.log(miniFeatBlog)
     
 const miniPicSel = (id) =>{
  switch (id) {
    case 9:
      return mini2
      break
    case 10:
      return mini1
      break
    case 11:
      return mini3
      break
  }
 }  
 //Conditional rendering
 if (blogs.length ===0 ){
  return <div className="loading">Loading...</div>
 }

 if (!showHideBlog){
  return null
 }

return (
  <div className="container">
    <div className="grid-item-1">
      <FeaturedBlog bloginfo = {featureBlog} />
      <div className="featureLittleBox">
        <Link className = "featLink" onClick= {hideBlog} to = '/blogdetail' state = {{title:featureBlog.title,entry:featureBlog.entry,date:featureBlog.createdAt,id:featureBlog.id }}>...Read More</Link>
        <Link to = '/enterblog'><button className="addBlog">Add Post</button></Link>
      </div>
    </div>
    <div className="grid-item-2">
      {/* this will be the side bar */}
      <div className="aboutMePicBox">
        <img className="aboutPic" src={mePic2} />
      </div>
      <div className="aboutStuff">Hi! I am Pita - Mom, Herbalist, Urban Agriculturist, Kemetic Yoga Basu, Chemist, and now, Junior Software Engineer. </div>
      <div className="aboutStuff">I'm a magical Pisces. I love purple. Prince is my muse.</div>
      <div className="linkBox">
        <a href="https://linkedin.com/in/pita-badila" target="_blank"><img className="linkImg" src = {link}/></a>
      </div>
      <div className="linkBox">
        <img className="linkImg" src = {envelope} />
      </div>
      <div><p>pitabadila@gmail.com</p></div>
    </div>
    <div className="grid-item-3 miniSec">
      {/* 3 highlight blogs go here */}
      {miniFeatBlog.map(blog => (
        <div className = "miniFeat">
          <div className = "miniFeatPicBox">
            <img className = "miniImg" src = {miniPicSel(blog.id)}/>
          </div>
          <h3 className = "miniFeatTitle">{blog.title}</h3>
          <div className = "miniFeatDate">{blog.date}</div>
          <div className = "miniFeatEntry">{blog.entry.slice(0,200)}</div>
          <Link className = "miniLink" onClick= {hideBlog} to = '/blogdetail' state = {{title:blog.title,entry:blog.entry,date:blog.createdAt,id:blog.id }}>...Read More</Link>
          </div>
       
      ))}
    </div>
    <div className="grid-item-4 reg" >
      
      {blogs.map(blog => {
      if (blog.id !== 6 && blog.id !== 9 && blog.id !== 10 && blog.id !== 11) {
        return(
          <div className = "regBlogList" key={blog.id}>
            <div className = "regTitleBox">
              <h4 className = 'regTitle'>{blog.title}</h4>
              <div className = 'regDate'>{blog.createdAt}</div>
            </div>
            <div className = "regEntry">{blog.entry.slice(0,200)}</div>
            <Link className = "regLink" onClick= {hideBlog} to = '/blogdetail' state = {{title:blog.title,entry:blog.entry,date:blog.createdAt,id:blog.id }}>...Read More</Link>
          </div>
        )
      }
      return null
    })}
    </div>
  </div>
);
    
}
export default Blog