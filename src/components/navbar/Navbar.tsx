import { useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Projetos', n: '01' },
  { label: 'Sobre', n: '02' },
  { label: 'Stack', n: '03' },
  { label: 'Contato', n: '04' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.nav}>
      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <a className={styles.brand} href="#">
        <span className={styles.brandText}>
          <b>caio.scura</b>
          <span>.dev</span>
        </span>
      </a>

      <nav className={`${styles.menu} ${open ? styles.menuOpen : ''}`}>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.n}>
              <a
                className={styles.link}
                href={`#${link.label.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* botao de idioma no mobile */}
        <button className={`${styles.lang} ${styles.langInMenu}`} type="button">
          EN
        </button>
      </nav>

      <div className={styles.right}>
        {/* botao de idioma no desktop */}
        <button className={`${styles.lang} ${styles.langInBar}`} type="button">
          EN
        </button>

        <button
          className={`${styles.toggle} ${open ? styles.toggleOpen : ''}`}
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
