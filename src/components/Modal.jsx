import { createPortal } from "react-dom"

function Modal({ isOpen, onClose, children }){
  if (!isOpen) return null
  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}

export default Modal