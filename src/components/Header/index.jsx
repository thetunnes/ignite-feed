import styles from "./styles.module.css"

import FeedLogo from "../../assets/ignite-logo.svg"

export function Header() {

  return (
    <header className={styles.header}>
      <img src={FeedLogo} alt="Logo Ignite Feed" />
      <strong>Ignite Feed</strong>
    </header>
  )
}