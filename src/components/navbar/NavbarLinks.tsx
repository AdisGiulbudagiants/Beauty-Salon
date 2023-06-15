import { gsap } from "gsap"
import { useRef } from "react"
import { NavLink } from "react-router-dom"

type Props = {
  to: string
  name: string
}

const NavbarLinks = (props: Props) => {
  const main = useRef(null)
  let tl: any = null

  const action = () => {
    return (tl = gsap.fromTo(
      main.current,
      { x: -10, opacity: 0, visibility: "hidden" },
      {
        borderBottom: "1px solid #CDAA7D ",
        x: 0,
        visibility: "visible",
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    ))
  }

  function moveMain() {
    tl && !tl.reversed() ? tl.reverse() : action()
  }

  return (
    <NavLink
      to={props.to}
      onMouseEnter={moveMain}
      onMouseLeave={moveMain}
      className="text-[1.125rem] xxl:mr-[5rem] xl:mr-[2.5rem] last:mr-0 font-CormorantSemibold leading-[130%] hover:text-gold hover:duration-300">
      {props.name}
      <hr ref={main} className="w-[100%] invisible" />
    </NavLink>
  )
}

export default NavbarLinks
