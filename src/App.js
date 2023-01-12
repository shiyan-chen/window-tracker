import React from 'react'
import './App.css'
import Switch from './components/Switch'
import WindowTracker from './components/WindowTracker'

export default function App() {
  const [show, setShow] = React.useState(true)

  function toggle() {
    setShow((prevShow) => !prevShow)
  }

  return (
    <div className='container' data-theme={show ? 'light' : 'dark'}>
      <Switch show={show} toggle={toggle} />
      <WindowTracker />
    </div>
  )
}
