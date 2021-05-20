import axios from 'axios'

const baseUrl = 'https://prof-quotes.herokuapp.com/api'

const deleteQuote = id => {
  const promise = axios({
    method: 'DELETE',
    url: `${baseUrl}/quotes/${id}`
  })

  return promise
}

export default deleteQuote
