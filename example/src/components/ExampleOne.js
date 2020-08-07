import React, { useState } from 'react'
import Modal from 'plain-react-modal'
import 'plain-react-modal/dist/index.css'

const ExampleOne = (props) => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <div>
      <div className='padding-v-s'>
        <button onClick={() => setIsOpened(true)} className='btn btn-primary'>
          Launch demo modal
        </button>
      </div>
      {isOpened && (
        <Modal
          onClose={() => {
            setIsOpened(false)
          }}
          title='Log in'
          overlayColor='rgba(0, 0, 0, .8)'
          backgroundColor='#FFF'
        >
          <form>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Email address</label>
              <input
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter email'
              />
              <small id='emailHelp' className='form-text text-muted'>
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Password</label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                placeholder='Password'
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </Modal>
      )}
    </div>
  )
}

export default ExampleOne
