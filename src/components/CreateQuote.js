import { useForm } from 'react-hook-form'

const CreateQuote = ({ options, handleCreate }) => {
  const { handleSubmit, register } = useForm()

  const onSubmit = values => {
    handleCreate(values)
  }

  const list = options.map(option => (
    <option key={option} value={option}>
      {option}
    </option>
  ))

  return (
    <form
      onSubmit={handleSubmit(onSubmit, e => {
        console.log(e)
      })}
    >
      <div>
        <label htmlFor='quote'>Cita</label>
        <input
          type='text'
          id='quote'
          {...register('quote', { required: true })}
        />
      </div>
      <div>
        <label htmlFor='class'>Clase</label>
        <select id='class' {...register('class', { required: true })}>
          <option value=''>Selecciona una clase</option>
          {list}
        </select>
      </div>
      <button>Submit</button>
    </form>
  )
}

export default CreateQuote
