import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='error'>You need to set info about your conditions work.
      <br />
      <button><a><Link to={'/'}>
        Back to a previous page
        </Link></a></button>
    </div>
  )
}

export default Error