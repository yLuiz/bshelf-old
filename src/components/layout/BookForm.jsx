import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "./Input"
import { SubmitButton } from "./SubmitButton"
import './BookForm.css'
import { TextArea } from "./TextArea"

export function BookForm({ id, text, buttonDelete, buttonUpdate, handleDelete, handleUpdate, handleSubmit }) {

  const [book, setBook] = useState({})

  if(id) {   
    const URL = `http://localhost:5000/book/${id}`
    
    useEffect(() => {
      fetch(URL)
      .then((data) => data.json())
      .then((oneBooks) => {
        setBook(oneBooks)
      })
      .catch(err => console.log(err))
    }, [])
  }

  const submitForm = (event) => {
    event.preventDefault()
    handleSubmit(book)
  }

  const updateBook = (event) => {
    handleUpdate(book)
  }

  const deleteBook = (event) => {
    event.preventDefault()
    handleDelete()
  }


  function handleBook(e) {
    setBook({...book, [e.target.name]: e.target.value})
  }


  return(
    <div className="formContainer">
      <form onSubmit={submitForm}>
        <Input 
          id="title"
          name="title"
          text="Título:"
          type="text"
          value={book.title ? book.title : ''}
          handleOnChange={handleBook}
        />

        <Input 
          id="author" 
          name="author"
          text="Autor:"
          type="text"
          value={book.author ? book.author : ''}

          handleOnChange={handleBook}
        />

        <TextArea
          id="description" 
          name="description"
          text="Descrição:"
          value={book.description ? book.description : ''}

          handleOnChange={handleBook}
        />

        <Input 
          id="url_img" 
          name="url_img"
          text="Imagem:"
          title="URL da imagem do livro"
          type="text"
          
          value={book.url_img ? book.url_img : ''}
          handleOnChange={handleBook}
        />  

        <Input 
          id="pages"
          name="pages"
          text="Páginas:"
          type="number"
          value={book.pages ? book.pages : ''}

          handleOnChange={handleBook}
        />

        <div className="actions">
          {buttonUpdate ? 
            <div className="inputContainer">
              <input 
              className="buttonUpdate"
              type="button" 
              value="EDITAR"
              onClick={() => updateBook(book)}
              /> 
            </div>
          : 
            <SubmitButton 
            id='submit'
            text={text}
            />
          }

          {buttonDelete ? 
            <div className="inputContainer">
              <input 
              className="buttonDelete"
              type="button" 
              value="REMOVER"
              onClick={deleteBook}
            /> 
            </div>

            : ""
          }
        </div>

      </form>
    </div>
  )
}