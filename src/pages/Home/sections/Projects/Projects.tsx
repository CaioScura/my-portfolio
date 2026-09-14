import { useState } from 'react'
import styles from './Projects.module.css'
import ProjectCard, { type ProjectCardProps } from '../../../../components/project-card/ProjectCard'

const PAGE_SIZE = 3

//importacao de todas as imagens dos projetos que estiverem em images/projetos
const projectImages = import.meta.glob('../../../../assets/images/projetos/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
}) as Record<string, string>



const img = (filename: string) =>
    projectImages[`../../../../assets/images/projetos/${filename}`]



const projects: ProjectCardProps[] = [
    {
        category: 'Full Stack',
        title: 'Mood Player Spotify',
        description: 'Mood Player que recomenda e reproduz músicas curtidas do Spotify de acordo com o humor escolhido. O projeto foi desenvolvido para explorar o consumo da API do Spotify, autenticação e configuração da aplicação, além de práticas de deploy com Docker e Render.',
        stack: ['Bootstrap', 'CSS', 'JavaScript', 'Laravel', 'OAuth 2.0', 'Spotify Web API'],
        image: img('img-prj-api-spotify.png'),
    },
    {
        category: 'Front-end',
        title: 'Movie APP Filmes e Séries',
        description: 'Aplicação para explorar filmes, séries e animes, integrada a diferentes APIs para consulta e exibição de conteúdos. O projeto utiliza componentização e separação de serviços, buscando manter o código organizado, reutilizável e escalável.',
        stack: ['React', 'Next.js', 'Typescript', 'SCSS', 'API'],
        image: img('img-movies-app.png')
    },
    {
        category: 'Back-end',
        title: 'Projeto 3',
        description: 'Breve descrição do projeto: o problema que ele resolve, principais funcionalidades e destaques técnicos.',
        stack: ['Laravel', 'PHP', 'MySQL'],
    },
]

const Projects = () => {
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
    const visibleProjects = projects.slice(0, visibleCount)
    const hasMore = visibleCount < projects.length

    return (
        <section className={styles.projects} id="projetos">
            <div className={styles.inner}>
                <h2 className={styles.title}>
                    Projetos<span className="cursor">_</span>
                </h2>

                <div className={styles.grid}>
                    {visibleProjects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>

                {hasMore && (
                    <button
                        className={styles.more}
                        type="button"
                        onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                    >
                        Ver mais projetos
                    </button>
                )}
            </div>
        </section>
    )
}

export default Projects
