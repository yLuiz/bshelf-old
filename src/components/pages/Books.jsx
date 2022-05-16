import { Link } from 'react-router-dom'
import { BsPlus, BsJournalBookmark } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import './Books.css'

export function Books() {

  const [books, setBooks] = useState([])
  const URL = "http://localhost:5000/book/"

  useEffect(() => {
    fetch(URL)
    .then((data) => data.json())
    .then((AllBooks) => {
      setBooks(AllBooks)
    })
    .catch(err => console.log(err))
  }, [])

  return(
    <section className='bookSection'>
      <h1>Livros:</h1>
      <Link className="linkAdd" to="/register">
        <BsPlus />
        Cadastrar
      </Link>
      <div className='allBooksContainer'>
        <ul>
          {(books.length > 0) ? books.map( book => (
              <li className='bookItem' key={book._id}>
                <div>
                  <Link className='linkBook' to={`/book/${book._id}`}> 
                    <h2>
                      {book.title}
                    </h2>
                    <div className="bookImg">
                      <img
                        src={book.url_img}
                        alt={`Imagem do livro ${book.title}`} 
                      />
                    </div>
                    <span>
                      <BsJournalBookmark />
                      {book.pages} páginas
                    </span>
                  </Link>
                </div>
              </li>
            )) : <p>Não há livros!</p>}
        </ul>
      </div>
    </section>
  )
}