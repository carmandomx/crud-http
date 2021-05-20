import axios from 'axios'

const baseUrl = 'https://prof-quotes.herokuapp.com/api'

const create = newQuote => {
  const promise = axios({
    method: 'POST',
    url: `${baseUrl}/quotes`,
    data: newQuote
  })

  return promise
}

export default create
