import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import BlogDetail from './BlogDetail'
import FeaturedBlog from './FeaturedBlog'

import mini1 from '../imgs/mini1.png'
import mini2 from '../imgs/mini2.png'
import mini3 from '../imgs/mini3.png'

const Blog = () => {

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
  return <div>Loading...</div>
 }
 
return (
  <div className="container">
    <div className="grid-item-1">
      <FeaturedBlog bloginfo = {featureBlog} />
    </div>
    <div className="grid-item-2">
      {/* this will be the side bar */}
      <div>This will be the cartoon img</div>
      <div>This is the about me</div>
      <div>This will be the social media links</div>
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
          </div>
       
      ))}
    </div>
    <div className="grid-item-4">
      
      {blogs.map(blog => (
        <div className = "regBlogList">
          <div className = "regTitleBox">
            <h4 className = 'regTitle'>{blog.title}</h4>
            <div className = 'regDate'>{blog.createdAt}</div>
          </div>
          <div className = "regEntry">{blog.entry.slice(0,200)}</div>
        </div>
        // <BlogDetail 
        //   id = {blog.id}
        //   title = {blog.title}
        //   entry = {blog.entry}
        //   date = {blog.createdAt}
        // />
      ))}
    </div>
  </div>
);
    
}
export default Blog