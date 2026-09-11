import { FiArrowUp } from 'react-icons/fi'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span className={styles.name}>
                <b>caio.scura</b>
                <span>.dev</span>
            </span>

            <span className={styles.tech}>Feito com React, TypeScript &amp; Vite</span>

            <a className={styles.toTop} href="#" aria-label="Voltar ao topo">
                <FiArrowUp />
            </a>
        </footer>
    )
}

export default Footer
