import type { ReactNode } from 'react'
import styles from './InfoCard.module.css'

interface InfoCardProps {
    icon: ReactNode
    title: string
    lines: string[]
}

/** Card simples com ícone, título e algumas linhas de texto — usado no Sobre mim. */
const InfoCard = ({ icon, title, lines }: InfoCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            <h3 className={styles.title}>{title}</h3>

            {lines.map((line, index) => (
                <p key={index} className={styles.line}>{line}</p>
            ))}
        </div>
    )
}

export default InfoCard
