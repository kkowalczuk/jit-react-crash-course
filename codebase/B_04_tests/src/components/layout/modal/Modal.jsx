import * as React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

import ModalOverlay from "./ModalOverlay"

const Modal = (props) => {
  const { isOpen, onClose, children } = props

  return isOpen
    ? ReactDOM.createPortal(
      (
        <ModalOverlay onClose={onClose}>
          {children}
        </ModalOverlay>
      ),
      document.body
    )
    : null
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal