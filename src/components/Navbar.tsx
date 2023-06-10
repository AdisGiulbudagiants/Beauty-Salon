import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className="h-[70px] w-[1296px] bg-transparent absolute text-white border border-red-700 ">
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/1">Мастера</NavLink>
      <NavLink to="/2">Услуги</NavLink>
    </div>
  )
}

export default Navbar
