import { FiImage } from 'react-icons/fi'
import styles from './ProjectCard.module.css'

export interface ProjectCardProps {
    image?: string
    category: string
    title: string
    description: string
    stack: string[]
}


const ProjectCard = ({ image, category, title, description, stack }: ProjectCardProps) => {
    return (
        <article className={styles.card}>
            {image ? (
                <img className={styles.image} src={image} alt={title} />
            ) : (
                <div className={styles.imagePlaceholder}>
                    <FiImage />
                </div>
            )}

            <div className={styles.body}>
                <p className={styles.category}>{category}</p>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                <div className={styles.stack}>
                    {stack.map((tech) => (
                        <span key={tech} className={styles.tech}>{tech}</span>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default ProjectCard
