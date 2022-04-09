import React from 'react'
import PropTypes from 'prop-types'
import './Gif.css'

const Gif = ({ gif }) => {
  return (
    <div className='Gif__container'>
      {/* <div className="Gif__header">
        <h3>header</h3>
      </div> */}
      <div className='Gif__body'>
        <img className='Gif__img' src={gif.images.original.url} alt={gif.title} />
      </div>
      <div className='Gif_name'>
        {gif.title}
      </div>
    </div>
  )
}

Gif.prototype = {
  gif: PropTypes.object.isRequired
}

export default Gif
