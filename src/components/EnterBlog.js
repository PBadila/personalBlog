import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

import { useState,setState } from 'react'
// import { useNavigate } from 'react-router-dom'

const EnterBlog = () => {

    const [blogInfo, setBlogInfo] = useState({
        title:'',
        entry:'',
        link:'',
        topic:'',
       
      })
      
      
    //   const navigate = useNavigate()

    //   const backToBlog = () =>{
    //       navigate('/blog/')
    //   }
    const handleChange = (event) => {
        setBlogInfo({...blogInfo, [event.target.name]: event.target.value})
        
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(blogInfo);
        
        // backToBlog()

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




    return(
        <div>
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
    )
}
export default EnterBlog