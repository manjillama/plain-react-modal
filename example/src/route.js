import React, { useEffect, useState } from 'react'

/*
 * Using small custom route cause our application route is not going to get too complex
 */
export function Route({ path, children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', onLocationChange)

    return () => {
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])
  return currentPath === path ? children : null
}

export function Link({ to, className, children }) {
  function onClick(e) {
    /*
     * on osx we use metaKey and on window we use ctrlKey
     * If either of them are pressed when clicking use browser default functionality
     * i.e. pressing cmd key and clicking on link opens the link in new tab
     */
    if (e.metaKey || e.ctrlKey) {
      return
    }

    e.preventDefault()
    window.history.pushState({}, '', to)

    /*
     * Firing popstate event which will be caught by the route event
     */
    const navEvent = new PopStateEvent('popstate')
    window.dispatchEvent(navEvent)
  }
  return (
    <a onClick={onClick} className={className} href={to}>
      {children}
    </a>
  )
}
