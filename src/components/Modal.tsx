import React, { useRef } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef<HTMLDialogElement>(null)
    modalRef.current?.showModal()
    const onClosew = () => {
        modalRef.current?.close()
    }
  return (
    <>
    <dialog open={isOpen} className='r' ref={modalRef}>
      <div>
        {children}
        <button onClick={onClosew}>Close</button>
      </div>
    </dialog>
    </>
  );
};

export default Modal;
