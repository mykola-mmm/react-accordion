import React from 'react';
import Modal from './modal';
import { useState } from 'react';
import './modal.css';

export default function ModalTest() {

    const [showModalPopup, setShowModalPopup] = useState(false)

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup)
    }
  return (
    <div className='modal-test'>
        <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
        {
            showModalPopup && <Modal body={<div>Modified Body</div>} closeFunction={()=>handleToggleModalPopup(false)}/>
            // showModalPopup && <div className="test">TEXT</div>>
        }
    </div>
  )
}
