const Quote = ({ text, classText, id, handleDelete }) => {
  return (
    <div>
      <p>
        {text} <br /> {classText}
      </p>
      <button onClick={() => handleDelete(id)}>delete</button>
    </div>
  )
}

export default Quote
