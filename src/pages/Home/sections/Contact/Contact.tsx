import { useState, type FormEvent } from 'react'
import styles from './Contact.module.css'
import { FaGithub } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'
import { MailIcon, ArrowUpRightIcon } from '../../../../components/icons/Icons'

const EMAIL = 'caioruivo02@gmail.com'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    // sem backend por enquanto: abre o cliente de e-mail do usuário já preenchido
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const subject = encodeURIComponent(`Contato via portfólio — ${name || 'sem nome'}`)
        const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\n${message}`)

        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    }

    return (
        <section className={styles.contact} id="contato">
            <div className={styles.inner}>
                <div className={styles.grid}>
                    <div className={styles.message}>
                        <h2 className={styles.title}>
                            Vamos conversar?<span className="cursor">_</span>
                        </h2>

                        <p className={styles.intro}>
                            Estou aberto a novas oportunidades e projetos.
                            Se você gostou do meu trabalho e quiser conversar,
                            sinta-se à vontade para entrar em contato comigo!
                        </p>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.field}>
                            <label htmlFor="contact-name">Nome</label>
                            <input
                                id="contact-name"
                                type="text"
                                placeholder="Seu nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="contact-email">E-mail</label>
                            <input
                                id="contact-email"
                                type="email"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="contact-message">Mensagem</label>
                            <textarea
                                id="contact-message"
                                placeholder="O que vamos construir?"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>

                        <button className={styles.submit} type="submit">
                            Enviar mensagem
                            <ArrowUpRightIcon />
                        </button>
                    </form>

                    <div className={styles.channels}>
                        <a className={styles.channel} href={`mailto:${EMAIL}`}>
                            <MailIcon />
                            {EMAIL}
                        </a>

                        <a
                            className={styles.channel}
                            href="https://github.com/CaioScura"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub />
                            GitHub
                        </a>

                        <a
                            className={styles.channel}
                            href="https://www.linkedin.com/in/caio-scura/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <CiLinkedin />
                            LinkedIn
                        </a>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}

export default Contact
