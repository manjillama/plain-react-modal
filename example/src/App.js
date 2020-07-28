import React, { useState } from 'react'
import Modal from 'react-simple-modal'
import 'plain-react-modal/dist/index.css'
import './style.css'

const App = () => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <div>
      <div className='container-md'>
        <div className='padding-v-s'>
          <button onClick={() => setIsOpened(true)} className='btn btn-primary'>
            Launch demo modal
          </button>
        </div>
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
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Modal>
      )}
    </div>
  )
}

export default App
