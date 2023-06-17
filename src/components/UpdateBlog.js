import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

import { useState,setState } from 'react'

const UpdateBlog = () => {

    const [blogUpdate, setBlogUpdate] = useState({
        title:'',
        entry:'',
        link:'',
        topic:'',
       
      })

      const handleChange2 = (event) => {
        setBlogInfo({...blogUpdate, [event.target.name]: event.target.value})
        
    }

    const handleSubmit2 = async (event) => {
        event.preventDefault();
        console.log(blogUpdate);
        
        // backToBlog()

        try{
            const response = await fetch('https://blog-fbt9.onrender.com/journals',{
               method: 'PUT',
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
            title:'',
            entry:'',  
            link:'',
            topic:'',
        })
    }




    return(
        <div>

            <h1>Update a Blog</h1>
            <Form onSubmit={handleSubmit2}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizonalTitle">
                    <Form.Label column sm={2}>
                        Title
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                        value ={blogUpdate.title}
                        name="title"
                        type="text" 
                        placeholder="Title" 
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
                <Form.Group as={Row} className="mb-3" controlId="formHorizonalTitle">
                    <Form.Label column sm={2}>
                        Topic
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                        value ={blogUpdate.topic}
                        name="topic"
                        type="text" 
                        placeholder="Topic(s) (separate with a comma)" 
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
    )
}
export default UpdateBlog