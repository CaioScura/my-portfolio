import { useState } from 'react'
import styles from './Projects.module.css'
import ProjectCard, { type ProjectCardProps } from '../../../../components/project-card/ProjectCard'
import { FaChevronDown  } from "react-icons/fa6"

const PAGE_SIZE = 3

//importacao de todas as imagens dos projetos que estiverem em images/projetos
const projectImages = import.meta.glob('../../../../assets/images/projetos/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
}) as Record<string, string>

const img = (filename: string) =>
    projectImages[`../../../../assets/images/projetos/${filename}`]



//importacao dos videos de preview dos projetos
const projectVideos = import.meta.glob('../../../../assets/videos/**/*.{mp4,webm}', {
    eager: true,
    import: 'default',
}) as Record<string, string>

const vid = (path: string) =>
    projectVideos[`../../../../assets/videos/${path}`]



//conteudo dos cards dos projetos
const projects: ProjectCardProps[] = [
    {
        category: 'Full Stack',
        title: 'Mood Player Spotify',
        description: 'Mood Player que recomenda e reproduz músicas curtidas do Spotify de acordo com o humor escolhido. O projeto foi desenvolvido para explorar o consumo da API do Spotify, autenticação e configuração da aplicação, além de práticas de deploy com Docker e Render.',
        stack: ['Bootstrap', 'CSS', 'JavaScript', 'Laravel', 'OAuth 2.0', 'Spotify Web API'],
        image: img('img-prj-api-spotify.png'),
        video: vid('prj-spotify/video-mood-layer-spotify.mp4'),
        repoUrl: 'https://github.com/CaioScura/API_Spotify',
    },
    {
        category: 'Front-end',
        title: 'Extensão Gatos Flutuantes',
        description: 'Extensão para navegador que adiciona gatinhos animados em qualquer página da web. Possui diversas animações que eu mesmo criei utilizando software de pixel art, você pode mover os gatos e deixar em qualquer canto da tela.',
        stack: ['JavaScript', 'HTML', 'CSS', 'Manifest V3'],
        image: img('img-extensao-gatos.png'),
        video: vid('prj-gatos-flutuantes/prj-gatos-flutuantes.mp4'),
        repoUrl: 'https://github.com/CaioScura/petExtension',
        note: 'Disponível para download em breve!',
    },
    {
        category: 'Front-end',
        title: 'Movie APP Filmes e Séries',
        description: 'Aplicação para explorar filmes, séries e animes, integrada a diferentes APIs para consulta e exibição de conteúdos. O projeto utiliza componentização e separação de serviços, buscando manter o código organizado, reutilizável e escalável.',
        stack: ['React', 'Next.js', 'Typescript', 'SCSS', 'API'],
        image: img('img-movies-app.png'),
        video: vid('prj-movies-app/movies-app-caiote.mp4'),
        repoUrl: 'https://github.com/CaioScura/movies-app',
        liveUrl: 'https://movies-app-caiote.vercel.app/',
    },
    {
        category: 'Back-end',
        title: 'Sistema de Gestão de Fornecedores',
        description: 'Sistema desenvolvido em Java para gerenciamento de fornecedores, com operações de cadastro, alteração, exclusão e consulta. A aplicação utiliza JDBC para conexão com o banco de dados e uma interface gráfica para interação com o usuário.',
        stack: ['Java', 'JDBC', 'SQL', 'POO', 'MySQL'],
        repoUrl: 'https://github.com/CaioScura/prjJavaFornecedoresJDBC',
    },
    {
        category: 'Back-end',
        title: 'API REST em Java',
        description: 'Trilha da Alura Java e Spring Boot: Aprenda a criar aplicações com o framework mais amado do mundo Java. API REST desenvolvida com Spring Boot para gerenciamento de médicos e pacientes de uma clínica médica.',
        stack: ['Java', 'SpringBoot', 'MySQL'],
        repoUrl: 'https://github.com/CaioScura/API-REST-springboot',
        note: 'Em desenvolvimento',
    },
]


const Projects = () => {
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
    const visibleProjects = projects.slice(0, visibleCount)
    const isExpanded = visibleCount >= projects.length
    const canToggle = projects.length > PAGE_SIZE

    const handleToggle = () => {
        if (isExpanded) {
            setVisibleCount(PAGE_SIZE)
            // volta o scroll pro início da seção, já que a grade encolhe
            document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            setVisibleCount((count) => count + PAGE_SIZE)
        }
    }

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

                {canToggle && (
                    <button className={styles.more} type="button" onClick={handleToggle}>
                        {isExpanded ? 'Ocultar projetos' : 'Ver mais projetos'}
                        <FaChevronDown className={isExpanded ? styles.moreIconUp : styles.moreIcon} />
                    </button>
                )}
            </div>
        </section>
    )
}

export default Projects
