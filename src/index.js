import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import modalStyles from './styles.module.css'

export default class Modal extends Component {
  componentWillMount() {
    this.modalTarget = document.createElement('div')
    document.body.appendChild(this.modalTarget)
  }

  componentDidMount() {
    this.body = document.querySelector('body')
    this.body.classList.add(modalStyles.modalOpen)
  }

  componentWillUnmount() {
    this.body.classList.remove(modalStyles.modalOpen)

    ReactDOM.unmountComponentAtNode(this.modalTarget)
    document.body.removeChild(this.modalTarget)
  }

  render() {
    return ReactDOM.createPortal(
      <ModalContent {...this.props} />,
      this.modalTarget
    )
  }
}

function ModalContent(props) {
  const {
    title,
    noShadow,
    onClose,
    children,
    overlayColor,
    backgroundColor,
    styles = {}
  } = props

  if (backgroundColor) styles.backgroundColor = backgroundColor
  if (noShadow) styles.boxShadow = 'none'

  return (
    <div
      className={modalStyles.modal}
      style={{ backgroundColor: overlayColor }}
    >
      <div
        className={modalStyles.modalDialog}
        style={{ ...modalStyles, ...styles }}
      >
        <div className={modalStyles.modalHeader}>
          <h4>{title}</h4>
          <button className={modalStyles.closeModal} onClick={onClose}>
            <svg width='24' height='24'>
              <path
                d='M20.13 8.11l-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61'
                fillRule='evenodd'
              />
            </svg>
          </button>
        </div>
        <div className={modalStyles.modalBody}>{children}</div>
      </div>
    </div>
  )
}
