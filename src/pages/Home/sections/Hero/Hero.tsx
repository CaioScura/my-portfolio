import styles from './Hero.module.css'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoIosContact } from 'react-icons/io';
import { TiDocumentText } from 'react-icons/ti';
import MsgWelcome from '../../../../components/msg-welcome/MsgWelcome'
import CurriculoPdf from '../../../../assets/images/curriculo/CAIO ROBERTO RUIVO SCURA PEREIRA - desenvolvedor.pdf'
import Avatar from '../../../../assets/images/perfil-draw.png'

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <MsgWelcome welcomeText="Welcome to my portfolio" titleText="Desenvolvedor Full Stack" />

                    <p className={styles.tagline}>
                        Gosto de transformar ideias em interfaces criativas,
                        intuitivas e funcionais, criando soluções completas com código limpo,
                        organizado e componentizado.
                    </p>

                    <div className={styles.socials}>
                        <a
                            className={styles.social}
                            href="https://github.com/CaioScura"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub aria-hidden />
                            GitHub
                        </a>

                        <a
                            className={styles.social}
                            href="https://www.linkedin.com/in/caio-scura/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <CiLinkedin aria-hidden />
                            LinkedIn
                        </a>

                        <a className={styles.social} href="#contato">
                            <IoIosContact aria-hidden />
                            Contato
                        </a>

                        <a
                            className={styles.social}
                            href={CurriculoPdf}
                            download="Caio-Scura-Curriculo.pdf"
                        >
                            <TiDocumentText aria-hidden />
                            Download CV
                        </a>
                    </div>

                </div>

                <div className={styles.divPhoto}>
                    <img className={styles.photo} src={Avatar} alt="Caio Scura" />
                </div>
            </div>
        </section>
    )
}

export default Hero
