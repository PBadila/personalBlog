import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

import { useState,setState } from 'react'
import ImageUploading from 'react-images-uploading'
// import { useNavigate } from 'react-router-dom'

const EnterBlog = () => {

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
            {/* <div>
            <div className="App"><ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div> */}
          </div>
    //         {({ imageList, onImageUpload, onImageRemoveAll, errors }) => (
    // errors && <div>
    //   {errors.maxNumber && <span>Number of selected image exceed maxNumber</span>}
    //   {errors.acceptType && <span>Your selected file type is not allow</span>}
    //   {errors.maxFileSize && <span>Selected file size exceed maxFileSize</span>}
    //   {errors.resolution && <span>Selected file is not match your desired resolution</span>}
    // </div>
  // )}
        // </div>
    )
}
export default EnterBlog