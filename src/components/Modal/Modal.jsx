import React from "react";
import ReactDOM from "react-dom";
import FormInput from "../Form";

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div onClick={hide} className="fixed top-0 left-0 z-[1040] w-full h-full bg-black opacity-50" />
          <div
            className="fixed top-0 left-0 right-0 z-[1050] w-auto h-auto my-[10vh] mx-auto outline-0 "
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="z-[100] mx-auto bg-white relative max-w-[60vw] rounded-md p-6">
              <div className="flex items-center justify-end">
                <svg
                  className="w-6 h-6 text-gray-800 rounded-full cursor-pointer dark:text-white hover:text-white hover:bg-rose-500"
                  onClick={hide}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <FormInput hide={hide} />
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
