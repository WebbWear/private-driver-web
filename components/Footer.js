import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/privatedriver-icon.png" alt="PrivateDriver Logo" className={styles.logo} />
      </footer>
    </>
  )
}
