const baseUrl = 'https://prof-quotes.herokuapp.com/api'

const getOptions = () => {
  const promise = fetch(`${baseUrl}/quotes/options`)

  return promise.then(res => res.json())
}

export default getOptions
