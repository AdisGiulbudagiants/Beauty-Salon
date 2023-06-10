import MouseSVG from "../assets/MouseSVG"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <p className={styles.header}>
          Салон красоты <br /> «Delote-Beauty» <br />
          на Крестовском
        </p>
        <div className={styles.scrollDown}>
          <MouseSVG />
          <p className={styles.scrollDown__text}>Прокрутите вниз</p>
        </div>
      </div>
    </div>
  )
}

export default Header
