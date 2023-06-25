import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

import { useState,setState } from 'react'
import ImageUploading from 'react-images-uploading'
import { useNavigate, Link } from 'react-router-dom'

const EnterBlog = () => {
  const navigate = useNavigate()
  const [ displayAddForm, setDisplayAddForm ] = useState('none')
  const [ errorDisplay, setErrorDisplay ] = useState('none')
    const [ loginDisplay, setLoginDisplay ] = useState('block')
    const [ loginInfo, setLoginInfo ] = useState({
        username:'',
        password:''
    })
    const storedPassword = process.env.REACT_APP_PASSWORD
    const storedUsername = process.env.REACT_APP_USERNAME

    const [blogInfo, setBlogInfo] = useState({
        title:'',
        entry:'',
        link:'',
        topic:'',
       
      })
      const [ images, setImages ] = useState([])
      const maxNumber  = 10

      const onChange = ( imageList, addUpdateIndex ) => {
        console.log(imageList, addUpdateIndex)
        setImages(imageList)
      }
      
      
      
  
    const handleChange = (event) => {
        setBlogInfo({...blogInfo, [event.target.name]: event.target.value})
        
    }
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(blogInfo);
      

        try{
            const response = await fetch('https://blog-fbt9.onrender.com/journals',{
               method: 'POST',
               headers: {
                'Content-Type' : 'application/json',
               } ,
               body: JSON.stringify(blogInfo),
            });

            if (response.ok){
                const responseData = await response.json();
                console.log('Data submitted successfully:',responseData);
            } else{
                console.error('Error submitting data:',response.status);
                }
            }catch (error){
                console.error('Error submitting data:',error)
            
        }
        setBlogInfo({ 
            title:'',
            entry:'',  
            link:'',
            topic:'',
        })
    }

  const handleChange3 = (event) => {
      setLoginInfo({...loginInfo, [event.target.name]: event.target.value})
      
  } 

  const handleSubmit3 = async (event) => {
    event.preventDefault();
   
   
    if(loginInfo.username == storedUsername && loginInfo.password ==storedPassword){
        setDisplayAddForm('block')
        setLoginDisplay('none')
    } else{

        setErrorDisplay('block')
        setLoginInfo({ 
            username:'',
            password:'', 
        })

        navigate('/')    
    }
}


    return(
      <div>
        <div style={{display:`${displayAddForm}`}}>
            <h1>Add a Blog</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizonalTitle">
                    <Form.Label column sm={2}>
                        Title
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                        value ={blogInfo.title}
                        name="title"
                        type="text" 
                        placeholder="Title" 
                        style={{width:'60%',height:'25px'}}
                        onChange={handleChange}
                        />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-3" controlId="formHorizonalTitle">
                    <Form.Label column sm={2}>
                        Entry
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                        as="textarea" 
                        type="text" 
                        placeholder="Blog entry goes here." 
                        style={{height:'300px', width:"80%"}} 
                        value={blogInfo.entry}
                        name="entry"
                        onChange={handleChange}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizonalTitle">
                    <Form.Label column sm={2}>
                        Link
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                        value ={blogInfo.link}
                        name='link'
                        type="text" 
                        placeholder="Link" 
                        style={{width:'60%',height:'25px'}}
                        onChange={handleChange}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizonalTitle">
                    <Form.Label column sm={2}>
                        Topic
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                        value ={blogInfo.topic}
                        name="topic"
                        type="text" 
                        placeholder="Topic(s) (separate with a comma)" 
                        style={{width:'60%',height:'25px'}}
                        onChange={handleChange}
                        />
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
         </div>
         <div style={{display: `${loginDisplay}`}}>
            <h1>Enter Administrative Login</h1>
                <Form onSubmit={handleSubmit3}>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizonalTitle">
                        <Form.Label column sm={2}>
                            username
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                            value ={loginInfo.username}
                            name="username"
                            type="text" 
                            placeholder="Username" 
                            style={{width:'30%',height:'25px'}}
                            onChange={handleChange3}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizonalTitle">
                        <Form.Label column sm={2}>
                            password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                            value ={loginInfo.password}
                            name="password"
                            type="text" 
                            placeholder="Password" 
                            style={{width:'30%',height:'25px'}}
                            onChange={handleChange3}
                            />
                        </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit" className='subBtn'>
                        Submit
                    </Button>
                </Form>
             <h1 className="errorMsg" style={{display:`${errorDisplay}`}}>Incorrect username and/or password. Try again.</h1>
            </div>
            <Link to ='/'><h2 className='return'>Return to Blog</h2></Link>
      </div>
  
    )
}
export default EnterBlog