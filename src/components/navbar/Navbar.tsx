import EmblemaSVG from "../assets/EmblemaSVG"
import Insta from "../assets/MediaInst"
import NavbarLinks from "./NavbarLinks"

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="xxl:w-[81rem] xxl:h-[4.375rem] xxl:flex  xl:w-[55rem] xl:h-[4.375rem] lg:w-[40rem] lg:h-[4rem] lg:flex lg:justify-between md:w-[25rem] md:h-[4rem] md:flex md:justify-between sm:w-[15rem] sm:h-[3rem] sm:flex sm:justify-between bg-transparent absolute mt-[1.875rem] text-white border border-white border-t-0 border-r-0 border-l-0 ">
        <div className="mt-[0.4375rem]  sm:ml-0">
          <a href="https://www.instagram.com/" target="_blank">
            <Insta />
          </a>
        </div>
        <div className="flex xxl:w-[61.5625rem] xxl:mr-[5.9688rem] xxl:ml-[8.7813rem] lg:justify-center  sm:flex sm:justify-center ">
          <div className="flex w-[20.4375rem] xl:w-[19rem] xxl:h-[1.4375rem] xxl:block xl:block sm:hidden  mt-[0.5625rem] select-none">
            <div className="flex xl:justify-center">
              <NavbarLinks to="/" name="Главная" />
              <NavbarLinks to="/" name="Мастера" />
              <NavbarLinks to="/" name="Услуги" />
            </div>
          </div>
          <div className="xxl:mr-[6.4063rem] xxl:ml-[8.4688rem] xl:mr-[3.5rem] xl:ml-[4.5rem] md:mr-0 md:ml-0 sm:mr-0 sm:ml-0">
            <EmblemaSVG />
          </div>
          <div className="w-[23.75rem] xl:w-[21rem] xxl:h-[1.4375rem] xxl:block xl:block sm:hidden mt-[0.5625rem] select-none">
            <div className="flex justify-center">
              <NavbarLinks to="/" name="Цены" />
              <NavbarLinks to="/" name="Работы" />
              <NavbarLinks to="/" name="Контакты" />
            </div>
          </div>
        </div>
        <div className="  xxl:w-[50px] sm:ml-0 sm:mr-0  mt-[0.875rem] w-[3.125rem] flex flex-col items-end">
          <div className="bg-white xxl:w-[2.5rem] xl:w-[2rem] lg:w-[2rem] md:w-[2rem] sm:w-[1.5rem] h-[0.0625rem]" />
          <div className="bg-white xxl:w-[2.5rem] xl:w-[2rem] lg:w-[2rem] md:w-[2rem] sm:w-[1.5rem] h-[0.0625rem] mt-[0.625rem] mr-[0.625rem]" />
          <div className="bg-white xxl:w-[2.5rem] xl:w-[2rem] lg:w-[2rem] md:w-[2rem] sm:w-[1.5rem] h-[0.0625rem] mt-[0.625rem]" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
