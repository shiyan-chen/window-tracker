import React from 'react'

function Switch({ show, toggle }) {
  return (
    <div className='title-container'>
      <span className='title'>WINDOW TRACKER</span>
      <label className='toggle-switch'>
        <input type='checkbox' checked={show} onChange={toggle} />
        <span className='switch' />
      </label>
    </div>
  )
}
export default Switch
