import React, { useState, useEffect } from 'react'
import read from './services/read'
import './App.css'
import Quote from './components/Quote'
import CreateQuote from './components/CreateQuote'
import getOptions from './services/getOptions'
import create from './services/create'
import deleteQuote from './services/delete'

function App () {
  const [data, setData] = useState([])
  const [options, setOptions] = useState([])
  const [quoteToCreate, setQuoteToCreate] = useState(null)
  const [quoteToDelete, setQuoteToDelete] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    read().then(data => {
      setData(data.quotes)
    })

    getOptions().then(data => {
      setOptions(data.classOptions)
    })
  }, [])

  useEffect(() => {
    if (quoteToCreate) {
      setIsLoading(true)
      create(quoteToCreate).then(
        res => {
          setData(prev => [res.data, ...prev])
          setIsLoading(false)
        },
        err => {
          console.error(err)
          setIsLoading(false)
        }
      )
    }
  }, [quoteToCreate])

  useEffect(() => {
    if (quoteToDelete) {
      setIsLoading(true)
      deleteQuote(quoteToDelete).then(
        () => {
          setData(prev => {
            return prev.filter(value => value._id !== quoteToDelete)
          })

          setIsLoading(false)
        },
        err => {
          console.error(err)
          setIsLoading(false)
        }
      )
    }
  }, [quoteToDelete])

  const handleCreate = values => {
    setQuoteToCreate(values)
  }

  const handleDelete = id => {
    setQuoteToDelete(id)
  }

  const list = data.map(quote => (
    <Quote
      text={quote.quote}
      classText={quote.class}
      key={quote._id}
      id={quote._id}
      handleDelete={handleDelete}
    />
  ))

  return (
    <div className='App'>
      <header className='App-header'>
        <h6>Las citas del profe</h6>
        {isLoading ? (
          'CARGANDO LOS DATOS PERAME...'
        ) : (
          <>
            <CreateQuote options={options} handleCreate={handleCreate} />

            {list}
          </>
        )}
      </header>
    </div>
  )
}

export default App
