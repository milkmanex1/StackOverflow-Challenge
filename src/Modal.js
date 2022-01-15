import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Alert from "./Alert";

const Modal = ({
  showModal,
  closeModal,
  submitForm,
  setTitle,
  setBody,
  setTags,

  alert1,
  alert2,
  alert3,
  removeAlert1,
  removeAlert2,
  removeAlert3
  
}) => {
  return (
    <div>
      {showModal ? (
        <div className="modal-overlay open-modal">
          <article className="modal-container">
            <div className="modal-title">Ask a Question</div>
            <form className="qns-form" onSubmit={submitForm}>
              <h1>Title</h1>
              <p>
                Be specific and imagine you're asking a question to another
                person
              </p>
              {alert1.show && (
                <Alert {...alert1} removeAlert={removeAlert1}></Alert>
              )}
              {/* <div className="alert">Please Enter a Title!</div> */}
              {/* --------------------------TITLE------------------------ */}
              <input
                type="text"
                className="qns-title"
                placeholder="Enter question title.."
                onChange={(e) => setTitle(e.target.value)}
              />
              <h1>Body</h1>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              {/* --------------------------BODY----------------------- */}
              {alert2.show && (
                <Alert {...alert2} removeAlert={removeAlert2}></Alert>
              )}
              {/* <div className="alert">Please Enter a Body!</div> */}
              <textarea
                className="qns-text"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Enter question details. Include all details! "
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
              <h1>Tags</h1>
              <p>Add up to 5 tags to describe what your question is about</p>
              {/* --------------------------TAGS------------------------ */}
              {alert3.show && (
                <Alert {...alert3} removeAlert={removeAlert3}></Alert>
              )}
              <input
                type="text"
                className="qns-tags"
                placeholder="eg. javascript, react, mobx"
                onChange={(e) => setTags(e.target.value)}
              />

              <button className="qns-submit" type="submit">
                Submit
              </button>
            </form>

            <button className="close-modal" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </button>
          </article>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
