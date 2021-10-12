import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main/Main'

const props = {
  userName: 'Ákos',
  lang: 'tyspcript'
}

ReactDOM.render(
  <Main { ...props } />,
    document.querySelector('#root')
)
