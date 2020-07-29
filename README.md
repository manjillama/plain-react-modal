# plain-react-modal

Lightweight easy to use, highly customizable react modal

[![Build Status](https://travis-ci.org/manjillama/plain-react-modal.svg)](https://travis-ci.org/manjillama/plain-react-modal)
[![NPM](https://img.shields.io/npm/v/plain-react-modal.svg)](https://www.npmjs.com/package/plain-react-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![License](https://img.shields.io/github/license/manjillama/plain-react-modal.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

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

| Property           | Type    | Description                                                |
| ------------------ | ------- | ---------------------------------------------------------- |
| onClose (required) | func    | Called when user clicks on close button                    |
| title              | String  | Modal title                                                |
| overlayColor       | String  | Modal overlay color i.e. rgba(255, 255, 255, .8)           |
| backgroundColor    | String  | Modal dialog background color i.e. #FFF                    |
| noShadow           | boolean | Modal dialog shadow (default value is false)               |
| styles             | object  | Modal css style i.e. {maxWidth: '960px', color: '#2c3543'} |

## Demo

Demo available at [CodePen](https://codepen.io/manjiltamang/project/full/AJyNaq)

## Contributing

Pull requests are welcome! You can create an issue or send in a PR. Please see [here](https://github.com/manjillama/plain-react-modal/blob/master/CONTRIBUTING.md).

## License

MIT © [manjillama](https://github.com/manjillama)
