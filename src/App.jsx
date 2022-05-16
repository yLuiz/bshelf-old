import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Books } from './components/pages/Books'
import { Register } from './components/pages/Register'
import { BookInfo } from './components/pages/BookInfo'
import { EditBook } from './components/pages/EditBook'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/book/:id" element={<BookInfo />}></Route>
          <Route path="/edit/:id" element={<EditBook />}>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

/*   [
    {
      "title": "Inteligência Artificial",
      "author": "Kai-Fu Lee",
      "urlImg": "https://images-na.ssl-images-amazon.com/images/I/41USfMS+jaL._SX338_BO1,204,203,200_.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium pariatur ad aspernatur totam officiis itaque reiciendis ullam, delectus, nobis voluptatum a omnis illo dolorum quidem error cum dolores vero aut.",
      "pages": 248
    },
    {
      "title": "O Hobbit",
      "author": "J.R.R Tolkien ",
      "urlImg": "https://images-na.ssl-images-amazon.com/images/I/91M9xPIf10L.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium pariatur ad aspernatur totam officiis itaque reiciendis ullam, delectus, nobis voluptatum a omnis illo dolorum quidem error cum dolores vero aut.",
      "pages": 298
    },
    {
      "title": "Fundação",
      "author": "Isaac Asimov",
      "urlImg": "https://editoraaleph.com.br/wp-content/uploads/2021/03/SKU_FundacaoDelux_1.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium pariatur ad aspernatur totam officiis itaque reiciendis ullam, delectus, nobis voluptatum a omnis illo dolorum quidem error cum dolores vero aut.",
      "pages": 1198
    },
    {
      "title": "Código Limpo",
      "author": "Uncle Bob",
      "urlImg": "https://cdn.shopify.com/s/files/1/0606/9511/8053/products/4153E2zZmTS._SX350_BO1_204_203_200.jpg?v=1635598821",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium pariatur ad aspernatur totam officiis itaque reiciendis ullam, delectus, nobis voluptatum a omnis illo dolorum quidem error cum dolores vero aut.",
      "pages": 398
    },
    {
      "title": "Eu, robô",
      "author": "Isaac Asimov",
      "urlImg": "https://images-na.ssl-images-amazon.com/images/I/414QJOKvD+L._SX328_BO1,204,203,200_.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium pariatur ad aspernatur totam officiis itaque reiciendis ullam, delectus, nobis voluptatum a omnis illo dolorum quidem error cum dolores vero aut.",
      "pages": 295
    },
  ]
 */