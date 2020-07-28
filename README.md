# plain-react-modal

Lightweight easy to use, highly customizable react modal

[![NPM](https://img.shields.io/npm/v/react-simple-modal.svg)](https://www.npmjs.com/package/react-simple-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install plain-react-modal
    $ yarn add plain-react-modal

## Usage

```jsx
import React, { Component } from 'react'

import Modal from 'plain-react-modal'
import 'plain-react-modal/dist/index.css'

class Example extends Component {
  render() {
    return (
      <Modal
        onClose={() => {
          // code here
        }}
        title='Modal title'
        overlayColor='rgba(255, 255, 255, .8)'
        backgroundColor='#FFF'
      >
        <p>Woohoo, you're reading this text in a modal!</p>
      </Modal>
    )
  }
}
```

## Options

| Property           | Type   | Description                                      |
| ------------------ | ------ | ------------------------------------------------ |
| onClose (required) | func   | Called when user clicks on close button          |
| title              | String | Modal title                                      |
| overlayColor       | String | Modal overlay color i.e. rgba(255, 255, 255, .8) |
| backgroundColor    | String | Modal background color i.e. #FFF                 |

## License

MIT © [manjillama](https://github.com/manjillama)
