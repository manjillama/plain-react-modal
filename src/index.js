import React, { useEffect } from 'react'
import modalStyles from './styles.module.css'

const Modal = ({
  title,
  noShadow,
  onClose,
  children,
  overlayColor,
  backgroundColor,
  styles = {}
}) => {
  useEffect(() => {
    const body = document.querySelector('body')
    body.classList.add(styles.modalOpen)
    return () => {
      body.classList.remove(styles.modalOpen)
    }
  }, [])

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

export default Modal
