import styles from './Hero.module.css'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoIosContact } from 'react-icons/io';
import { TiDocumentText } from 'react-icons/ti';
import CodeWindow, { type CodeToken } from '../../../../components/code-window/CodeWindow'
import MsgWelcome from '../../../../components/msg-welcome/MsgWelcome'
// sem foto por enquanto
// import Avatar from '../../../../assets/images/avatar.png'

// conteudo do code window
const codeTokens: CodeToken[] = [
    { text: 'const ' },
    { text: 'caio', cls: 'name' },
    { text: ' = {\n  role: ' },
    { text: "'software developer'", cls: 'str' },
    { text: ',\n  focus: [' },
    { text: "'frontend'", cls: 'str' },
    { text: ', ' },
    { text: "'backend'", cls: 'str' },
    { text: ', ' },
    { text: "'design'", cls: 'str' },
    { text: '],\n  stack: ' },
    { text: "'React, TypeScript, JavaScript, Laravel, PHP'", cls: 'str' },
    { text: '\n};\n\n' },
    { text: 'caio', cls: 'name' },
    { text: '.create(' },
    { text: "'creative interfaces'", cls: 'str' },
    { text: ');' },
]

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <MsgWelcome welcomeText="Welcome to my portfolio" titleText="Desenvolvedor Full Stack" />

                    {/* <img className={styles.photo} src={Avatar} alt="Caio Scura" /> */}

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

                        <a
                            className={styles.social}
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IoIosContact aria-hidden />
                            Contato
                        </a>

                        <a
                            className={styles.social}
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <TiDocumentText aria-hidden />
                            Download CV
                        </a>
                    </div>

                </div>

                <div className={styles.windowSlot}>
                    <CodeWindow fileName="caio-portfolio.js" tokens={codeTokens} />
                </div>
            </div>
        </section>
    )
}

export default Hero
