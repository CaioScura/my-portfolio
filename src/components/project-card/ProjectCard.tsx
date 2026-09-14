import { FiImage } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { ArrowUpRightIcon } from '../icons/Icons'
import styles from './ProjectCard.module.css'

export interface ProjectCardProps {
    image?: string
    category: string
    title: string
    description: string
    stack: string[]

    //link do repositorio
    repoUrl?: string

    //link do projeto no ar
    liveUrl?: string
}

const ProjectCard = ({ image, category, title, description, stack, repoUrl, liveUrl }: ProjectCardProps) => {
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

                {(repoUrl || liveUrl) && (
                    <div className={styles.links}>
                        {repoUrl && (
                            <a className={styles.codeLink} href={repoUrl} target="_blank" rel="noreferrer">
                                <FaGithub />
                                Código
                            </a>
                        )}

                        {liveUrl && (
                            <a className={styles.liveLink} href={liveUrl} target="_blank" rel="noreferrer">
                                Ver projeto
                                <ArrowUpRightIcon />
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    )
}

export default ProjectCard
