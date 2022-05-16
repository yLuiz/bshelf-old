import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { BsBook, BsPencilSquare } from 'react-icons/bs'

export function Navbar() {

  return (
    <header>
      <nav>
        <ul className='navbarList' id='lista_menu'>
          <li>
            <NavLink 
              className={( {isActive} ) => isActive ? "selected" : ""} 
              to="">
              <BsBook />
              LIVROS
            </NavLink>
          </li>
          <li>
            <NavLink 
              className={( {isActive} ) => isActive ? "selected" : ""} 
              to="register"
            >
              <BsPencilSquare />
              CADASTRAR
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}