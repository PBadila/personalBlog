import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { useNavigate, Link, useLocation } from 'react-router-dom'
// import "./CustomCardImage.scss";

import Pic1 from '../imgs/featurepic2.jpg'

const FeaturedBlog = ( { bloginfo }) =>{
  console.log(bloginfo)
    return (
        <div className = "featureContainer">
          
  <div className="featBlogContainer">
    <div className="featBlogPicBox">
      <img className="featPic" src = {Pic1} />
    </div>
    <div className="featBlogPrev">
        {bloginfo.entry.slice(0,420)}
        <Link to = '/blogDetail' state = {{title:bloginfo.title,entry:bloginfo.entry,date:bloginfo.date,id:bloginfo.id }}>...Read More</Link>
    </div>
    <div className="featBlogLink">

    </div>
  </div>

        </div>
    )
}
export default FeaturedBlog