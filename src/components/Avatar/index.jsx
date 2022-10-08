import styles from "./styles.module.css"

export function Avatar({ src, hasBorder = true }) {
  return (
    <img className={!hasBorder ? styles.border : styles.avatar} src={src} />
  )
}