import React from 'react'
import './search.css'
import PropTypes from 'prop-types'

const Search = ({ search, handleSearch }) => {
  return (
    <div className='Search__container'>
      <input
        className='Search__input'
        type='text'
        placeholder='Search gifs...'
        value={search}
        onChange={handleSearch}
      />
    </div>
  )
}

Search.prototype = {
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default Search
