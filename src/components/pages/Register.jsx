import { BookForm } from "../layout/BookForm"
import { useNavigate } from "react-router-dom"
import './Register.css'

export function Register() {
  const navigate = useNavigate()

  const URL = `http://localhost:5000/book/`
  async function createBook(book) {
    await fetch(URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
    .then((res) => {
      res.json()
    })
    .then((data) => {
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return(
    <section className="registerSection">
      <h1>Cadastre seu livro:</h1>
      <BookForm handleSubmit={createBook} text="CADASTRAR" />
    </section>
  )
}