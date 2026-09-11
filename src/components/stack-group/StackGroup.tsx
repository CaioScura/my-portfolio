import type { ReactNode } from 'react'
import { FiInfo } from 'react-icons/fi'
import styles from './StackGroup.module.css'

interface StackItem {
    icon: ReactNode
    label: string
    
    //texto do tooltip em info no card(estudando)
    note?: string
}

interface StackGroupProps {
    title: string
    items: StackItem[]
}


// card com grupo de tecnologias
const StackGroup = ({ title, items }: StackGroupProps) => {

    //divide em 2 colunas
    const rows = Math.ceil(items.length / 2)

    return (
        <div className={styles.group}>
            <h3 className={styles.groupTitle}>{title}</h3>

            <ul className={styles.list} style={{ gridTemplateRows: `repeat(${rows}, auto)` }}>
                {items.map((item) => (
                    <li key={item.label} className={styles.item}>
                        <span className={styles.icon}>{item.icon}</span>
                        {item.label}
                        {item.note && (
                            <span className={styles.info} title={item.note}>
                                <FiInfo />
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default StackGroup
