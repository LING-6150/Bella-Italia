import React from "react";
import PropTypes from "prop-types";
import "../styles/Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} 
      >
        <button className="modal-close-button" onClick={onClose}>
          &times; 
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  onClose: PropTypes.func.isRequired, 
  children: PropTypes.node, 
};

export default Modal;
