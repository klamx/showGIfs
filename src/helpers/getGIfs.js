import axios from 'axios'

const apiKey = import.meta.env.VITE_GIF_API_KEY
const getGifs = async (query) => {
  const limit = '25'
  const offset = '0'
  const rating = 'g'
  const lang = 'en'
  const baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`

  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}

export default getGifs
