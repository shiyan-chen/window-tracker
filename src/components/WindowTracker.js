import React from 'react'

export default function WindowTracker() {
  const [windowSize, setWindowSize] = React.useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  })

  React.useEffect(() => {
    function watchWindowWidth() {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      })
    }
    window.addEventListener('resize', watchWindowWidth)
    return () => {
      window.removeEventListener('resize', watchWindowWidth)
    }
  }, [])

  return (
    <div className='window-size'>
      <div>Width: {windowSize.windowWidth} px</div>
      <div>Height: {windowSize.windowHeight} px</div>
    </div>
  )
}
