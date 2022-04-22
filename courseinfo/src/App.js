import React from 'react'
import Course from './Components/Course'

function App({courses}) {
  return(
  <div>
    <Course courses={courses} />
  </div>
  )
}
export default App