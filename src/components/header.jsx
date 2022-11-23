import styles from './header.module.css'
import rocketlogo from '../assets/rocket-logo.svg'

export function Header() {
  return (
    <div className={styles.header}>
      <img src={rocketlogo} alt="" />
      <h1>
        to<span>do</span>
      </h1>
    </div>
  )
}
