import React from 'react'

const Modal = ({ children, isShow }) => {
  return (
    <div className={'modal'}>
      {children}
    </div>
  )
}

export default Modal