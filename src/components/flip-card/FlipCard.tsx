import { useState, type KeyboardEvent, type ReactNode } from 'react'
import styles from './FlipCard.module.css'

interface FlipCardProps {
    front: ReactNode
    back: ReactNode
    ariaLabel?: string
}

//flip card das stacks com minha foto
const FlipCard = ({ front, back, ariaLabel }: FlipCardProps) => {
    const [locked, setLocked] = useState(false)

    const toggle = () => setLocked((v) => !v)

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            toggle()
        }
    }

    return (
        <div
            className={`${styles.flipCard} ${locked ? styles.locked : ''}`}
            onClick={toggle}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-pressed={locked}
            title="Clique para fixar lado"
            aria-label={ariaLabel}
        >
            <div className={styles.flipInner}>
                <div className={styles.face}>{front}</div>
                <div className={`${styles.face} ${styles.back}`}>{back}</div>
            </div>
        </div>
    )
}

export default FlipCard
