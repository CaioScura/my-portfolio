import { useEffect, useState } from 'react'
import styles from './MsgWelcome.module.css'

interface MsgWelcomeProps {
    welcomeText: string
    titleText: string
    /** ms entre cada caractere */
    typeSpeed?: number
    /** ms de espera entre o fim do welcome e o início do título */
    holdTime?: number
}

// digita welcome e depois que terminar usa o desenvolvedor fullstack
const MsgWelcome = ({ welcomeText, titleText, typeSpeed = 35, holdTime = 700 }: MsgWelcomeProps) => {
    const [welcomeTyped, setWelcomeTyped] = useState('')
    const [titleTyped, setTitleTyped] = useState('')
    const welcomeDone = welcomeTyped.length === welcomeText.length

    useEffect(() => {
        let i = 0
        let j = 0
        let timer: ReturnType<typeof setTimeout>

        const typeTitle = () => {
            j += 1
            setTitleTyped(titleText.slice(0, j))
            if (j < titleText.length) timer = setTimeout(typeTitle, typeSpeed)
        }

        const typeWelcome = () => {
            i += 1
            setWelcomeTyped(welcomeText.slice(0, i))
            if (i < welcomeText.length) {
                timer = setTimeout(typeWelcome, typeSpeed)
            } else {
                timer = setTimeout(typeTitle, holdTime)
            }
        }

        timer = setTimeout(typeWelcome, 300)
        return () => clearTimeout(timer)
    }, [welcomeText, titleText, typeSpeed, holdTime])

    return (
        <>
            <p className={styles.welcome}>
                {welcomeTyped}
                {!welcomeDone && <span className={styles.cursor}>_</span>}
            </p>

            <h1 className={styles.title}>
                {titleTyped}
                {welcomeDone && <span className={styles.cursor}>_</span>}
            </h1>
        </>
    )
}

export default MsgWelcome
