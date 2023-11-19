/* eslint-disable react/prop-types */
import Modal from "react-modal";
import React from "react";
import cstyles from "./Common.module.css";

export class ErrorModalData {
  title: string;
  body: string | JSX.Element;
  modalIsOpen: boolean;
  shouldCloseOnOverlayClick: boolean;
  shouldCloseOnEsc: boolean;
  showCloseBtn: boolean
  fnToExecute?: () => void;
  closeModal?: () => void;

  constructor() {
    this.modalIsOpen = false;
    this.shouldCloseOnOverlayClick = true;
    this.shouldCloseOnEsc = true;
    this.showCloseBtn = true;
    this.title = "";
    this.body = "";
  }
}

export const ErrorModal = ({ title, body, modalIsOpen, closeModal, fnToExecute, shouldCloseOnOverlayClick, shouldCloseOnEsc, showCloseBtn  }: ErrorModalData) => {
  const onAfterOpenFunc = fnToExecute
    ?
      () => setTimeout( () => {
        fnToExecute();
        if( closeModal ) closeModal()
      }, 1000)
    : undefined

  return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onAfterOpen={onAfterOpenFunc}
        className={cstyles.modal}
        overlayClassName={cstyles.modalOverlay}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        shouldCloseOnEsc={shouldCloseOnEsc}
      >
        <div className={[cstyles.verticalflex].join(" ")}>
          <div className={cstyles.marginbottomlarge} style={{textAlign: "center"}}>
            {title}
          </div>

          <div
            className={cstyles.well}
            style={{textAlign: "center", wordBreak: "break-all", maxHeight: "400px", overflowY: "auto"}}
          >
            {body}
          </div>
        </div>

        {showCloseBtn &&
          <div className={cstyles.buttoncontainer}>
            <button type="button" className={cstyles.primarybutton} onClick={closeModal}>
              Close
            </button>
          </div>
        }
      </Modal>
    );
};
