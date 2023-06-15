import ReverseCommon from "../assets/ReverseCommon"
import styles from "./Second.module.css"

const Second = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className="mx-auto h-[4rem] xxl:mb-[3.75rem] xl:mb-[3.75rem] lg:mb-[3.75rem] md:mb-[3.75rem] sm:mb-[1.5rem]">
          <ReverseCommon />
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh
          vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan
          risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis
          tristique. Viverra augue lorem ut quisque quam tortor, malesuada
          iaculis. <br />
          <p className="mt-[1rem]">
            Et elementum at nulla venenatis, faucibus integer. Auctor neque
            eros, viverra rutrum. Fames ultrices condimentum tortor nec
            penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.
          </p>
        </p>
      </div>
    </div>
  )
}

export default Second
