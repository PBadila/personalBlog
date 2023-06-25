import { useLocation, Link } from 'react-router-dom'

import exit from '../imgs/exit3.png'
import ikigai from '../imgs/smallHeadPic/ikigai.jpg'
import post15 from '../imgs/largePic/post15ss1.png'
import smPic15 from '../imgs/smallHeadPic/smPic15.png'
import authentication from '../imgs/authentication.png'

const BlogDetail = (  ) => {
    const location = useLocation()
    const  { title, entry, date, id } = location.state
    console.log(title)
    console.log(entry)
    console.log(date)
    let year = date.slice(0,4)
    let monthNum = date.slice(5,7)
    let day = date.slice(8,10)
    const findMonth = (monthNum) =>{
        switch (monthNum){
            case '01':
                return "January"
                break
            case '02':
                return "February"
                break
            case '03':
                return "March"
                break
            case '04':
                return "April"
                break
            case '05':
                return "May"
                break
            case '06':
                return "June"
                break
            case '07':
                return "July"
                break
            case '08':
                return "August"
                break
            case '09':
                return "September"
                break
            case '10':
                return "October"
                break
            case '11':
                return "November"
                break
            case '12':
                return "December"
                break
        }
    }
    let month = findMonth(monthNum)
    console.log(year)
    console.log(monthNum)
    console.log(month)
    console.log(day)
    let revDate = month + " " + day + "," + year
    console.log(revDate)
   console.log(id)
   console.log(typeof(id))
     const picSelect = (id) =>{
        switch (id) {
            case 6:
                return ikigai
                break
            case 15:
                return smPic15
                break
        }
     }
     const picBigSelect = (id) =>{
        switch (id) {
            
            case 15:
                return post15
                break
            case 18:
                return authentication
                break
        }
     }

    
    return(
      
        <div className="blogDetailContainer">
            <div className="detailHolder">
                <div className="titleBox">
                    <h1 className="detailTitle"> {title} </h1>
                    <h3 className="detailDate"> {revDate} </h3> 
                </div>
                <div className="blogDetailImgBox">
                    <img className="blogDetailImg" src={picSelect(id)}/> 
                </div>
                <p className="detailEntry"> {entry} </p>
                <div className="bigBlogImg">
                    <img className= "bigBlogImgs" src={picBigSelect(id)}/>
                </div>
                <div className="exitBox">
                    <Link to = '/' ><img className='exitDetail' src = {exit} /></Link>
                    <Link to ={`/updateblog/${id}`}><button className="updateBtn">Update</button></Link>
                </div>
            </div>
        </div>
        
    )
}
export default BlogDetail