import React from 'react';
import Modal from './modal';
import { useState } from 'react';
import './modal.css';

export default function ModalTest({modalList}) {

    const [showModalPopup, setShowModalPopup] = useState(false)

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup)
    }

    function handleToggleModalPopupV2(modalNum) {
        setShowModalPopup(modalNum)
        console.log(modalNum)
    }
  return (
    <div className='modal-test'>
        <div className="modal-wrapper">
        {
            modalList && modalList.length > 0 && modalList.map((modalText, index) => (
                <button onClick={()=>handleToggleModalPopupV2(index+1)} key={index}>{modalText.name}</button>
            ))
        }
        {
            showModalPopup && <Modal body={<div>{modalList[showModalPopup-1].content}</div>} closeFunction={()=>handleToggleModalPopup(false)}/>

        }
        </div>

        {/* <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
        {
            showModalPopup && <Modal body={<div>Modified Body</div>} closeFunction={()=>handleToggleModalPopup(false)}/>
            // showModalPopup && <div className="test">TEXT</div>>
        } */}
    </div>
  )
}
