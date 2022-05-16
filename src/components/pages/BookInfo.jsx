import { Link, useParams } from "react-router-dom"
import { BsJournalBookmark } from 'react-icons/bs'
import './BookInfo.css'
import { useState, useEffect } from "react"

export function BookInfo() {
  const [book, setBook] = useState({})
  const id = useParams().id

  const URL = `http://localhost:5000/book/${id}`

  useEffect(() => {
    fetch(URL)
    .then((data) => data.json())
    .then((oneBooks) => {
      setBook(oneBooks)
      console.log(oneBooks)

    })
    .catch(err => console.log(err))
  }, [])

  return (
  <section className="bookInfo">
    <h1>
      {book.title}
    </h1>
    <div>
      <img src={book.url_img} alt="" />
    </div>
    <p>{book.author}</p>
    <p>{book.description}</p>
    <p className="pages">
      <strong>
        <BsJournalBookmark />
        {book.pages} páginas
      </strong>
    </p>
    <div className="actions">
      <div className="backButton">
        <Link className="btn" to="/">
          Voltar
        </Link>
      </div>
      <div className="backButton">
        <Link className="btn" to={`/edit/${book._id}`}>
          Editar
        </Link>
      </div>
    </div>
  </section>
)
  
}