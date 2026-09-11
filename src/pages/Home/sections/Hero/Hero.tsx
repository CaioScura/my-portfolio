import styles from './Hero.module.css'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoIosContact } from 'react-icons/io';
import { TiDocumentText } from 'react-icons/ti';
// Foto desativada por enquanto — reative importando o avatar e o <img> abaixo.
// import Avatar from '../../../../assets/images/avatar.png'

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    {/* <p className={styles.eyebrow}>
                        Caio Scura, Software Engineer
                    </p> */}

                    {/* <img className={styles.photo} src={Avatar} alt="Caio Scura" /> */}

                    <h1 className={styles.title}>
                        Desenvolvedor <span>Full Stack</span>
                    </h1>

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

                <div className={styles.window}>
                    <div className={styles.bar}>
                        <div className={styles.dots}>
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className={styles.file}>caio-portfolio.js</span>
                    </div>

                    <pre className={styles.code}>
                        {'const '}
                        <span className={styles.name}>caio</span>
                        {' = {\n  role: '}
                        <span className={styles.str}>'software developer'</span>
                        {',\n  focus: ['}
                        <span className={styles.str}>'frontend'</span>
                        {', '}
                        <span className={styles.str}>'backend'</span>
                        {', '}
                        <span className={styles.str}>'design'</span>
                        {'],\n  stack: '}
                        <span className={styles.str}>'React, TypeScript, JavaScript, Laravel, PHP'</span>
                        {'\n};\n\n'}
                        <span className={styles.name}>caio</span>
                        {'.create('}
                        <span className={styles.str}>'creative interfaces'</span>
                        {');'}
                        <span className={styles.cursor}>_</span>
                    </pre>

                </div>
            </div>
        </section>
    )
}

export default Hero
