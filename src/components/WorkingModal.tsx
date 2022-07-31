/* eslint-disable react/prop-types */
import Modal from "react-modal";
import React from "react";
import cstyles from "./Common.module.css";

export class WorkingModalData {
  title: string;
  body: string | JSX.Element;
  modalIsOpen: boolean;
  fnToExecute?: () => void;
  closeModal?: () => void;

  constructor() {
    this.modalIsOpen = false;
    this.title = "";
    this.body = "";
  }
}

export const WorkingModal = ({ title, body, modalIsOpen, closeModal, fnToExecute }: WorkingModalData) => {
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
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
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

      </Modal>
    );
};
