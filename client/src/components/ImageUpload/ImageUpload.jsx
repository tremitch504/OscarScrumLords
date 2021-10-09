import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

//userObj: the current user that is logged in.
const ImageUplaod = ({ userObj }) => {
  //Create a state that will hold the files that is being uploaded
  const [imageSelected, setImageSelected] = useState('whatsgood');
  const [imgCaption, setCaption] = useState('');
  // const [cloudImage, setCloudImage] = useState({});
  console.log('Current User:', userObj);
  // console.log('CLOUD:', cloudImage);

  //Make a axios post requst to Cloudinary and our cloud name
  //this will take the imageSelected into our Cloudinary account
  const uploudCloud = () => {
    //create an instance object of a form data which will hold all the data coming from the input form
    const formData = new FormData();
    //Construct the formData to upload to Cloudinary
    //append: will append different info, send files to formData
    formData.append('file', imageSelected);
    //append the name of the upload preset
    formData.append('upload_preset', 'udl2nhbw');

    //After constructoring the formData, send axios post 
    axios.post('https://api.cloudinary.com/v1_1/dbylrb5vl/image/upload', formData)
      .then((result) => {
        // setCloudImage(result.data);
        // const Image = { 
        //   urlImage: 'huhjbjnjs',
        //   caption: 'Welcome to Bug\'s Life',
        //   likes: 9,
        //   public_id: result.data.public_id,
        // };
        axios.post( `/routes/imagepost/posts/imagePost/${userObj.id}`, { 
          urlImage: result.data.url,
          caption: imgCaption,
          likes: 9,
          public_id: result.data.public_id,
        })
          .then((results) => console.log('CLOUD:', results));
      }); 
    
  };
  // const createPost = () => {
  //   const Image = { 
  //     urlImage: cloudImage.url,
  //     caption: 'Welcome to Bug\'s Life',
  //     likes: 9,
  //     public_id: cloudImage.public_id,
  //   };
  //   console.log(Image);
  //   // axios.post( `/routes/imagepost/posts/imagePost/${userObj.id}`, Image)
  //   //   .then((results) => console.log(results));
      
  // };
 
  useEffect(() => {
    uploudCloud();
  }, []);
  //***STYLES***
  const uploadStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '150px',
    marginBottom: '10px',
  };
  const header = {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px',
    marginBottom: '10px',
    padding: '20px',
    fontSize: '30px'
  };
  const mustSignin = {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px',
    marginBottom: '10px',
    padding: '20px',
    fontSize: '30px'
  };
  //INPUT file: onChange will update the state of the imageSelected to be the image that is coming from the input.
  //INPUT text:
  //BUTTON: This button will invoke activate the uploadCloud function to send a post request to cloudinary with the formData, file information.

  if (userObj.id) {
    return (
      
      <div className="upload-section" style={uploadStyle}>
        <h6 className='header' style={header}><strong>Post a Picture!</strong></h6>
      
        <input type="text" placeholder='Enter a caption...' value={imgCaption} onChange={event => setCaption(event.target.value)} /> 
     
        <Button> <input type="file" style={{backgroundColor: 'transparent', color: 'white'}} onChange={(e) => {
          setImageSelected(e.target.files[0]);
        }}/>
        </Button>
        <Link to='/postList'> 
          <Button type='submit' size='lg' style={{marginTop: '30px'}} onClick={() => uploudCloud()}> Upload Image </Button>
        
        </Link>

      
      </div>
  
    );
  } else {
    return (<h6 className='header' style={mustSignin}><strong>Before You Can Upload A Post, Please Sign In!</strong></h6>);
  }
};

export default ImageUplaod;
