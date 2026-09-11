import { useEffect, useMemo, useState } from 'react'
import styles from './CodeWindow.module.css'

export type CodeToken = { text: string; cls?: 'name' | 'str' }

interface CodeWindowProps {
    fileName: string
    tokens: CodeToken[]
    typeSpeed?: number
}

// janela de digitacao
const CodeWindow = ({ fileName, tokens, typeSpeed = 50 }: CodeWindowProps) => {
    const codeLength = useMemo(
        () => tokens.reduce((sum, token) => sum + token.text.length, 0),
        [tokens]
    )

    const [typed, setTyped] = useState(0)

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (prefersReducedMotion) {
            setTyped(codeLength)
            return
        }

        setTyped(0)
        let count = 0
        const id = setInterval(() => {
            count += 1
            setTyped(count)
            if (count >= codeLength) clearInterval(id)
        }, typeSpeed)

        return () => clearInterval(id)
    }, [tokens, codeLength, typeSpeed])

    const renderedCode = useMemo(() => {
        let remaining = typed

        return tokens.map((token, index) => {
            if (remaining <= 0) return null

            const slice = token.text.slice(0, remaining)
            remaining -= token.text.length

            if (!slice) return null

            return token.cls ? (
                <span key={index} className={styles[token.cls]}>{slice}</span>
            ) : (
                <span key={index}>{slice}</span>
            )
        })
    }, [tokens, typed])

    return (
        <div className={styles.window}>
            <div className={styles.bar}>
                <div className={styles.dots}>
                    <span />
                    <span />
                    <span />
                </div>
                <span className={styles.file}>{fileName}</span>
            </div>

            <pre className={styles.code}>
                {renderedCode}
                <span className="cursor">_</span>
            </pre>
        </div>
    )
}

export default CodeWindow
