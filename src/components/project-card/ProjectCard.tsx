import { useState } from 'react'
import { FiImage, FiInfo } from 'react-icons/fi'
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

    //texto do tooltip em info ao lado do titulo
    note?: string

    //preview em video, so carrega quando passa o mouse
    video?: string
}

const ProjectCard = ({ image, category, title, description, stack, repoUrl, liveUrl, note, video }: ProjectCardProps) => {
    const [hovering, setHovering] = useState(false)
    const [videoReady, setVideoReady] = useState(false)

    return (
        <article
            className={styles.card}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => {
                setHovering(false)
                setVideoReady(false)
            }}
        >
            <div className={styles.media}>
                {image ? (
                    <img className={styles.image} src={image} alt={title} />
                ) : (
                    <div className={styles.imagePlaceholder}>
                        <FiImage />
                    </div>
                )}

                {/* so monta o <video> (e só então baixa o arquivo) quando o mouse entra no card */}
                {video && hovering && (
                    <video
                        className={`${styles.video} ${videoReady ? styles.videoVisible : ''}`}
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="none"
                        onCanPlay={() => setVideoReady(true)}
                    />
                )}
            </div>

            <div className={styles.body}>
                <p className={styles.category}>{category}</p>

                <h3 className={styles.title}>
                    {title}
                    {note && (
                        <span className={styles.info} title={note}>
                            <FiInfo />
                        </span>
                    )}
                </h3>

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
