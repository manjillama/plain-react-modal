import React, { useState } from 'react'
import Modal from 'plain-react-modal'
import 'plain-react-modal/dist/index.css'

const ExampleThree = () => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <div>
      <div className='padding-v-s'>
        <button onClick={() => setIsOpened(true)} className='btn btn-danger'>
          Launch demo modal
        </button>
      </div>
      {isOpened && (
        <Modal
          onClose={() => {
            setIsOpened(false)
          }}
          title='Modal title'
          overlayColor='rgba(255, 255, 255, .8)'
          backgroundColor='#FFF'
        >
          <p>Woohoo, you're reading this text in a modal!</p>
        </Modal>
      )}
    </div>
  )
}

export default ExampleThree
