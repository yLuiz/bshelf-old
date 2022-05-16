import { BookForm } from "../layout/BookForm"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import './Register.css'

export function EditBook() {
  const id = useParams().id
  const navigate = useNavigate()

  async function deleteBook() {
    const URL = `http://localhost:5000/book/${id}`
    await fetch(URL, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(() => {
      console.log("Livro deletado!")
      navigate('/')
    })
  }

  async function updateBook(book) {
    const URL = `http://localhost:5000/book/${id}`
    await fetch(URL, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
    .then(() => {
      console.log("Livro atualizado!")
      navigate('/')
    })
  }

  return(
    <section className="editSection">
      <h1>Edite seu livro:</h1>
      <BookForm 
        id={id} 
        buttonDelete={true} 
        buttonUpdate={true} 
        handleUpdate={updateBook}
        handleDelete={deleteBook} 
        text="EDITAR"/>
    </section>
  )
}