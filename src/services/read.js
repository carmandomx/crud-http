const baseUrl = 'https://prof-quotes.herokuapp.com/api'

const read = () => {
  const promise = fetch(`${baseUrl}/quotes`)

  return promise.then(res => res.json())
}

export default read
