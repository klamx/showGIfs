import React from 'react'
import PropTypes from 'prop-types'
import Gif from '../Gif/Gif'
import './Gifs.css'

const Gifs = ({ gifs }) => {
  return (
    <div className='Gifs__container'>
      {gifs.map((gif) => {
        return <Gif key={gif.id} gif={gif} />
      })}
    </div>
  )
}

Gifs.prototype = {
  gifs: PropTypes.object.isRequired
}

export default Gifs
