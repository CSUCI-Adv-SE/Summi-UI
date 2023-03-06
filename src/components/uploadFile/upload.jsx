import React, { useRef } from "react";
import axios from "axios";
import useFileUpload from "react-use-file-upload";
import style from "./uploadFile.module.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { config } from "../../constants";

const UpLoad = (props) => {
  const {
    files,
    fileNames,
    handleDragDropEvent,
    clearAllFiles,
    createFormData,
    setFiles,
  } = useFileUpload();

  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = createFormData();

    formData.append("uploaded_file", files[0]);
    axios
      .post(config.url.API_URL + "/upload-file/", formData, {
        "content-type": "multipart/form-data",
      })
      .then((response) => {
        if (response.data.status !== 200) {
          NotificationManager.error(
            response.data.message,
            "Error",
            5000
          );
        } else if (response.data.status === 200) {
          const summaryFormData = createFormData();
          summaryFormData.append("image_uuid", response.data.image_id);

          NotificationManager.success(
            "File is uploaded successfully",
            "Success",
            5000
          );

          setTimeout(() => {
            NotificationManager.info(
              "We are still recognising the text. Please allow us some time",
              "Info",
              5000
            );
          }, 8000);

          axios
            .post(config.url.API_URL + "/summarise-text/", summaryFormData, {
              "content-type": "multipart/form-data",
            })
            .then((summary_response) => {
              if (summary_response.data.status !== 200) {
                NotificationManager.error(
                  summary_response.data.message,
                  "Error",
                  5000
                );
              } else if (summary_response.data.status === 200) {
                let resp = {};
                resp["image_url"] = response.data.image_url;
                resp["recognised_text"] = summary_response.data.message;
                resp["clicked_on_navigate"] = true;
                props.parentCallback(resp);
              }
            })
            .catch((error) => {
              NotificationManager.error(error.message, "Error", 5000);
            });
        }
      })
      .catch((error) => {
        NotificationManager.error(error.message, "Error", 5000);
      });
  };

  return (
    <>
      <div className="col">
        <NotificationContainer />

        {/* Provide a drop zone and an alternative button inside it to upload files. */}
        <div
          className={style.dropzone}
          onDragEnter={handleDragDropEvent}
          onDragOver={handleDragDropEvent}
          onDrop={(e) => {
            handleDragDropEvent(e);

            if (e.dataTransfer.files) {
              if (e.dataTransfer.files.length === 1) {
                setFiles(e);
              } else {
                NotificationManager.error(
                  "Please Drag and drop one file",
                  "Error",
                  5000
                );
              }
            }
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/upload_icon.png"}
            alt="cloud_upload"
          />

          <p>Drag and drop files here</p>

          <button onClick={() => inputRef.current.click()}>
            Or select files to upload
          </button>

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => {
              setFiles(e);
              inputRef.current.value = null;
            }}
          />
        </div>

        <div className={style.list}>
          {files.length > 0 && (
            <>
              <ul>
                {fileNames.map((name) => (
                  <div key={name}>
                    <li key={name}>
                      <span className={style.files_names_list}>
                        {name} loaded
                      </span>

                      <div style={{ display: "flex" }}>
                        <button
                          className={style.clear_all}
                          onClick={() => clearAllFiles()}
                        >
                          Clear
                        </button>
                        <button className={style.submit} onClick={handleSubmit}>
                          Submit
                        </button>
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
            </>
          )}

          {files.length === 0 && (
            <button
              className="submit btn btn-light disabled"
              disabled
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default UpLoad;