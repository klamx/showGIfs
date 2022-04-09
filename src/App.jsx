import React, { useState, useEffect } from 'react'
import Gifs from './components/Gifs/Gifs'
import Search from './components/Search/Search'
import getGifs from './helpers/getGIfs'
import './index.css'

const App = () => {
  const [search, setSearch] = useState('')
  const [gifs, setGifs] = useState([])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    if (search === '') return
    getGifs(search).then((response) => setGifs(response.data))
  }, [search])

  return (
    <div className='App__container'>
      <Search search={search} handleSearch={handleSearch} />
      <Gifs gifs={gifs} />
    </div>
  )
}

export default App
