import { useState, type FormEvent } from 'react'
import styles from './Contact.module.css'
import { FaGithub } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'
import { MailIcon, ArrowUpRightIcon } from '../../../../components/icons/Icons'

const EMAIL = 'caioruivo02@gmail.com'

type Status = 'idle' | 'sending' | 'success' | 'error'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState<Status>('idle')

    // envia direto pro e-mail via Web3Forms (sem precisar de backend próprio)
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setStatus('sending')

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
                    subject: `Contato via portfólio — ${name}`,
                    name,
                    email,
                    message,
                }),
            })

            const data = await res.json()

            if (!data.success) throw new Error(data.message)

            setStatus('success')
            setName('')
            setEmail('')
            setMessage('')
        } catch {
            setStatus('error')
        }
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

                        <button className={styles.submit} type="submit" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
                            <ArrowUpRightIcon />
                        </button>

                        {status === 'success' && (
                            <p className={styles.feedbackSuccess}>Mensagem enviada! Retorno em breve.</p>
                        )}

                        {status === 'error' && (
                            <p className={styles.feedbackError}>
                                Não deu pra enviar agora. Tenta de novo ou manda um e-mail direto pra{' '}
                                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                            </p>
                        )}
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
