import * as React from "react"
import PropTypes from "prop-types"

import "./styles.css"

export default function ModalOverlay(props) {
  return (
    <div className="jit-modal-overlay">
      <div className="jit-modal-wrapper">
        <div className="jit-modal-header">
          <i className="material-icons" onClick={props.onClose}>close</i>
        </div>
        {props.children}
      </div>
    </div>
  )
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}