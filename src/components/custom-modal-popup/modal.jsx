import React from "react";

export default function Modal({ id, header, body, footer, closeFunction }) {
    
  return (
    <div className="modal" id={id || "Modal"}>
      <div className="modal-background" onClick={closeFunction}></div>
      <div className="modal-content">
        <div className="header">
          <span className="close-modal-icon" onClick={closeFunction}>X</span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">{body ? body : <div>Modal Body</div>}</div>
        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
}
