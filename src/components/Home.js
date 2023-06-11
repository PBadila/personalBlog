import oro from '../imgs/orobouros.png'
import comp from '../imgs/computerScience.png'

const Home = () =>{
    return (
     
    <div className = "header">
        <div className = "headerPic">
          <img className="headerPic1" src = {oro} />
        </div>
        <div className = "headerTitle"><span className="musings">Musings</span> on the <span className="journey">Journey</span> to <span className="se">Software Engineer</span></div>
        <div className = "headerPic">
          <img className="headerPic2" src = {comp} />
        </div>
    </div>
       
    )
}
export default Home