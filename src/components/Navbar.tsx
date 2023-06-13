import { NavLink } from "react-router-dom"
import EmblemaSVG from "./assets/EmblemaSVG"
import InstaSVG from "./assets/instaSVG"

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="xxl:w-[81rem] xxl:h-[4.375rem] xxl:flex xxl:justify-between xl:w-[55rem] xl:h-[4.375rem] lg:w-[40rem] lg:h-[4rem] lg:flex lg:justify-center md:w-[25rem] md:h-[4rem] md:flex md:justify-center sm:w-[15rem] sm:h-[3rem] sm:flex sm:justify-between bg-transparent absolute mt-[1.875rem] text-white border border-white border-t-0 border-r-0 border-l-0 ">
        <div className="mt-[0.4375rem] xxl:mr-[8.7813rem] xl:mr-[4rem] sm:mr-0 sm:ml-0">
          <InstaSVG />
        </div>
        <div className="flex xxl:w-[100%] lg:justify-center md:mx-auto md:w-[100%] sm:w-[100%] sm:flex sm:justify-center ">
          <div className="xxl:h-[1.4375rem] xxl:block xl:block sm:hidden mt-[0.5625rem]">
            <NavLink
              to="/"
              className="text-[1.125rem] font-CormorantSemibold leading-[130%] hover:text-gold hover:duration-300">
              Главная
            </NavLink>
            <NavLink
              to="/1"
              className="xxl:ml-[5rem] xl:ml-[2.5rem] text-[1.125rem] font-CormorantSemibold leading-[130%] hover:text-gold hover:duration-300">
              Мастера
            </NavLink>
            <NavLink
              to="/2"
              className="xxl:ml-[5rem] xl:ml-[2.5rem] text-[1.125rem] font-CormorantSemibold leading-[130%] hover:text-gold hover:duration-300">
              Услуги
            </NavLink>
          </div>
          <div className="xxl:mr-[6.4063rem] xxl:ml-[8.4688rem] xl:mr-[3.5rem] xl:ml-[4.5rem] md:mr-0 md:ml-0 sm:mr-0 sm:ml-0">
            <EmblemaSVG />
          </div>
          <div className="xxl:h-[1.4375rem] xxl:block xl:block sm:hidden mt-[0.5625rem]">
            <NavLink
              to=""
              className="  text-[1.125rem] font-CormorantSemibold leading-[130%] hover:text-gold hover:duration-300">
              Цены
            </NavLink>
            <NavLink
              to=""
              className="xxl:ml-[5rem] xl:ml-[2.5rem] w-[103px] text-[1.125rem] font-CormorantSemibold leading-[130%] hover:text-gold hover:duration-300">
              Работы
            </NavLink>
            <NavLink
              to=""
              className="xxl:ml-[5rem] xl:ml-[2.5rem] text-[1.125rem] font-CormorantSemibold leading-[130%] hover:text-gold hover:duration-300">
              Контакты
            </NavLink>
          </div>
        </div>
        <div className=" xxl:ml-[5.9688rem] xxl:w-[50px] xl:ml-[2rem] sm:ml-0 sm:mr-0  mt-[0.875rem] w-[3.125rem] flex flex-col items-end">
          <div className="bg-white xxl:w-[2.5rem] xl:w-[2rem] lg:w-[2rem] md:w-[2rem] sm:w-[1.5rem] h-[0.0625rem]" />
          <div className="bg-white xxl:w-[2.5rem] xl:w-[2rem] lg:w-[2rem] md:w-[2rem] sm:w-[1.5rem] h-[0.0625rem] mt-[0.625rem] mr-[0.625rem]" />
          <div className="bg-white xxl:w-[2.5rem] xl:w-[2rem] lg:w-[2rem] md:w-[2rem] sm:w-[1.5rem] h-[0.0625rem] mt-[0.625rem]" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
