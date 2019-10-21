import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Modal} from "react-bootstrap";
import './AddAddress.scss';

const AddAddressModal = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useImperativeHandle(ref, () => ({

    showModal() {
      handleShow();
    }

  }));

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <div className="modal-cross" onClick={handleClose}>
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.733 1.42188L9.15485 7L14.733 12.5781L13.3267 13.9844L7.7486 8.40625L2.17048 13.9844L0.764225 12.5781L6.34235 7L0.764225 1.42188L2.17048 0.015625L7.7486 5.59375L13.3267 0.015625L14.733 1.42188Z" fill="black"/>
          </svg>
        </div>

        <h1>Добавление адреса</h1>

        <div className='input-and-buttons app-input'>
          <input/>
          <div className='app-button-group'>
            <button className='primary-button'>Добавить</button>
            <button className='secondary-button'>Отменить</button>
          </div>
        </div>
      </Modal>
    </>
  );
});

export default AddAddressModal;
