import React, { useRef, useState } from "react";
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
import get_request_headers from "../utils/requestHeaders";

function remove_button_classes(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove("btn", "btn-light", "disabled");
  }
}

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

  const [urlInput, setUrlInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!urlInput && files.length === 0) {
      NotificationManager.error("Please provide a file or URL to upload", "Error", 5000);
      return;
    }

    const formData = createFormData();
    e.target.firstChild.classList.remove("d-none");
    let childs = e.target.parentElement.children;
    for (let i = 0; i < childs.length; i++) {
      childs[i].classList.add("btn", "btn-light", "disabled");
    }

    if (urlInput) {
      formData.append("uploaded_file_url", urlInput);
    } else {
      formData.append("uploaded_file", files[0]);
    }
    axios
      .post(config.url.API_URL + "/upload-file/", formData, get_request_headers())
      .then((response) => {
        if (response.data.status !== 200) {
          e.target.firstChild.classList.add("d-none");
          remove_button_classes(childs);
          NotificationManager.error(response.data.message, "Error", 5000);
        } else if (response.data.status === 200) {
          const summaryFormData = createFormData();
          summaryFormData.append("image_uuid", response.data.image_id);

          NotificationManager.success(
            "File is uploaded successfully",
            "Success",
            5000
          );

          let info_timer = setInterval(() => {
            NotificationManager.info(
              "We are still recognising the text. Please allow us some time",
              "Info",
              5000
            );
          }, 8000);

          axios
            .post(config.url.API_URL + "/summarise-text/", summaryFormData, get_request_headers())
            .then((summary_response) => {
              clearInterval(info_timer);
              if (summary_response.data.status !== 200) {
                e.target.firstChild.classList.add("d-none");
                remove_button_classes(childs);
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
              e.target.firstChild.classList.add("d-none");
              remove_button_classes(childs);
              NotificationManager.error(error.message, "Error", 5000);
            });
        }
      })
      .catch((error) => {
        e.target.firstChild.classList.add("d-none");
        remove_button_classes(childs);
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
        
          {/*<input
            className={style.url}
            type="text"
            placeholder="Or enter a URL to upload"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            
          />*/}
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
                          type="submit"
                          className={style.clear_all}
                          onClick={() => clearAllFiles()}
                        >
                          Clear
                        </button>
                        <button
                          type="submit"
                          className={style.submit}
                          onClick={handleSubmit}
                        >
                          <span
                            className="spinner-border spinner-border-sm d-none"
                            style={{ marginRight: "0.5rem" }}
                            role="status"
                            aria-hidden="true"
                          ></span>
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
              type="submit"
              style={{ opacity: "unset", }}
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
