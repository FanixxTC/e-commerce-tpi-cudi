import { Link } from "react-router-dom"
import Cartbutton from "./CartButton"

const NavbarBase = ({user, cart}) => {
  return (
    <>
        <Link 
          className="text-2x1 font-bold 
         text-emerald-400 items-center space-x-2
          flex" 
          to="/"
       >
        E-Commerce
      </Link>

      <nav className="flex flex-wrap items-center
      gap-4">
          <Link className="text-gray-300 hover:text-emerald-400
      transition duration-300 ease-in-out" to="/">
          Home
        </Link>
          <Cartbutton user={user} cart={cart}/>
      </nav>
    </>
  )
}

export default NavbarBase