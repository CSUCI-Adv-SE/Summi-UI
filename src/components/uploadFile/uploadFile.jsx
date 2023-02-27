import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import useFileUpload from 'react-use-file-upload';
import style from './uploadFile.module.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


function UpLoad() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);

  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);
  const isMobile = width <= 768;
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
    //*formData object to constructure a set of key/value pairs: form fileds and their 
    //this object is easily sent using the axios.post()method */}

    const formData = createFormData();

    formData.append("uploaded_file", files[0])
    try {
      // eslint-disable-next-line
      // http://18.224.179.137:8000/
      //eslint-disable-next-line
      axios.post("http://127.0.0.1:8000" + "/upload-file/", formData, {
        'content-type': 'multipart/form-data',
      }).then((response) => {
        console.log(response.data.status);
        if (response.data.status !== 200) {
          NotificationManager.error('Error message', response.data.message, 5000)
        }
      });
    }
    catch (error) {
      if (error.response && error.response.status > 200) {
        NotificationManager.error('An error occurred while fetching data', 'Error', 3000);
      }
    }

  };



  return (

    <div className={style.body}>
      <NotificationContainer />
      {/* Only display input file on mobile devices */}
      {isMobile &&
        <></>
      }


      {/* Provide a drop zone and an alternative button inside it to upload files.   */}

      <div
        className={style.dropzone}
        onDragEnter={handleDragDropEvent}
        onDragOver={handleDragDropEvent}
        onDrop={(e) => {
          e.preventDefault();
          handleDragDropEvent(e);
          setFiles([e.dataTransfer.files[0]]);
        }}>
        <img src={process.env.PUBLIC_URL + "/upload_icon.png"} alt="cloud_upload" />
        <p>Drag and drop files here</p>

        {/* Hide the crappy looking default HTML input */}

        <input
          ref={inputRef}
          type="file"
          accept='image/*'
          multiple={false}
          style={{
            display: 'none'
          }}
          onChange={(e) => {
            setFiles(e, 'a');
            inputRef.current.value = null;
          }}
        />
        <button onClick={() => inputRef.current.click()}>
          Or select files to upload
        </button>
      </div>




      <div className={style.list} >
        {/* Display the files to be uploaded */}
        <ul>

          {fileNames.length > 0 && (
            <li key={fileNames[fileNames.length - 1]}>
              <span>{fileNames[fileNames.length - 1]} loaded</span>
              <span onClick={() => removeFile(fileNames[fileNames.length - 1])}>
                <i className="fa fa-times" />
              </span>
            </li>)}
        </ul>
      </div>


      <div className={style.vertical_btn} >
        {
          files.length > 0 && (
            <button className='clean' onClick={() => clearAllFiles()}>Clear </button>
          )}
        <button className='submit' onClick={handleSubmit}>Recognise</button>
      </div>
    </div>


  );
}


export default UpLoad;

