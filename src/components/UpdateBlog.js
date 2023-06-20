import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

import { useState,setState } from 'react'
import { useParams,useNavigate,Link } from 'react-router-dom'




const UpdateBlog = () => {
    const [ display, setDisplay ] = useState('none')
    const [ errorDisplay, setErrorDisplay ] = useState('none')
    const [ loginDisplay, setLoginDisplay ] = useState('block')
    const [ loginInfo, setLoginInfo ] = useState({
        username:'',
        password:''
    })
    const storedPassword = process.env.REACT_APP_PASSWORD
    const storedUsername = process.env.REACT_APP_USERNAME

    const id = useParams()
    const blogId = id.id
    // console.log('blogId',blogId)
    const navigate = useNavigate()

    const [blogUpdate, setBlogUpdate] = useState({
        date:'',
        entry:'',
        link:''
       })

      const handleChange2 = (event) => {
        setBlogUpdate({...blogUpdate, [event.target.name]: event.target.value})
        
    }
    const handleChange3 = (event) => {
        setLoginInfo({...loginInfo, [event.target.name]: event.target.value})
        
    }

    const handleSubmit2 = async (event) => {
        event.preventDefault();
        // console.log(blogUpdate);
        // console.log(id)
        // console.log(typeof(id))
        const url = `https://blog-fbt9.onrender.com/journals/${blogId}`
        // console.log(url)
        // console.log('the update entry',blogUpdate.entry)

        try{
            const response = await fetch(url,{
               method: 'PATCH',
               headers: {
                'Content-Type' : 'application/json',
               } ,
               body: JSON.stringify(blogUpdate),
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
        setBlogUpdate({ 
            date:'',
            entry:'',  
            link:''
           
        })
        console.log('should be cleared', blogUpdate)
         navigate('/')
    }

    const handleSubmit3 = async (event) => {
        event.preventDefault();
       
       
        if(loginInfo.username == storedUsername && loginInfo.password ==storedPassword){
            setLoginDisplay('none')
            // console.log(loginDisplay)
            setDisplay('block')
            // console.log(display)
        } else{

            setErrorDisplay('block')
            setLoginInfo({ 
                username:'',
                password:'', 
            })

            
        }
    }





    return(
        <div>
            <div style={{display:`${display}`}}>

                <h1>Update a Blog</h1>
                <Form onSubmit={handleSubmit2}>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizonalTitle">
                        <Form.Label column sm={2}>
                            Date
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                            value ={blogUpdate.date}
                            name="date"
                            type="date" 
                            placeholder="Date" 
                            style={{width:'60%',height:'25px'}}
                            onChange={handleChange2}
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
                            value={blogUpdate.entry}
                            name="entry"
                            onChange={handleChange2}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizonalTitle">
                        <Form.Label column sm={2}>
                            Link
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                            value ={blogUpdate.link}
                            name='link'
                            type="text" 
                            placeholder="Link" 
                            style={{width:'60%',height:'25px'}}
                            onChange={handleChange2}
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
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
             <h1 style={{display:`${errorDisplay}`}}>Incorrect username and/or password. Try again or <Link to = '/'>return to blog.</Link></h1>
            </div>
            <Link to ='/'><h2>Return to Blog</h2></Link>
        </div>

       
    )
}
export default UpdateBlog