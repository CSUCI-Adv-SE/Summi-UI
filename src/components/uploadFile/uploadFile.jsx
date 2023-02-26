import React, { useRef} from 'react';
import axios from 'axios';
import useFileUpload from 'react-use-file-upload';
import style from './uploadFile.module.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


function UpLoad(){
  const {
    files,
    fileNames,
 
    handleDragDropEvent,
    clearAllFiles,
    createFormData,
    setFiles,
    removeFile,
  } = useFileUpload();

  const inputRef = useRef();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(files)
 //*formData object to constructure a set of key/value pairs: form fileds and their 
  //this object is easily sent using the axios.post()method */}
    const formData = createFormData();

    formData.append("uploaded_file", files[0])
    console.log(files)
     try{
      axios.post('http://127.0.0.1:8000/upload-file/', formData, {
        'content-type': 'multipart/form-data',
      }).then((response) => {
        console.log(response.data.status);
        if (response.data.status !== 200) {
          NotificationManager.error('Error message', response.data.message, 5000)    
        }
      })
      // NotificationManager.success('Files uploaded successfully!', 'Success', 3000);
      // NotificationManager.error('Error message', 'Click me!', 5000)
    }
      catch(error){
        if (error.response && error.response.status > 200) {
             NotificationManager.error('An error occurred while fetching data', 'Error', 3000);
             
            }
          }
      
    };


  return (
    
    <div className={style.body}>
      <NotificationContainer />
       
       {/* Provide a drop zone and an alternative button inside it to upload files. */}
       <div
        className={style.dropzone}
        onDragEnter={handleDragDropEvent}
        onDragOver={handleDragDropEvent}
        onDrop={(e) => {
          handleDragDropEvent(e);
          setFiles(e, 'a');
        }}
      > 
        <img src={process.env.PUBLIC_URL + "/upload_icon.png"} alt="cloud_upload"/>
        <p>Drag and drop files here</p>

        <button onClick={() => inputRef.current.click()}>Or select files to upload</button>

        {/* Hide the crappy looking default HTML input */}
        <input
          ref={inputRef}
          type="file"
          accept='image/*'
          style={{ display: 'none' }}
          onChange={(e) => {
            setFiles(e, 'a');
            inputRef.current.value = null;
          }}
        />
      </div>

    
  
          <div className={style.list} >
          {/* Display the files to be uploaded */}
   
          <ul>
            {fileNames.map((name) => (
              <li key={name}>
                <span>{name} loaded</span>

                <span onClick={() => removeFile(name)}>
                  <i className="fa fa-times" />
                </span>
              </li>
            ))}
          </ul>
           </div>


          <div className={style.vertical_btn} >         
                {
              files.length > 0 && (
                      <button  className='cleanall' onClick={() => clearAllFiles()}>Clear All</button>
                )}
            <button className='submit' onClick={handleSubmit}>Submit</button>
          </div>
</div>
      
);
}


export default UpLoad;