import styles from './Stack.module.css'
import StackGroup from '../../../../components/stack-group/StackGroup'
import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiAngular,
    SiLivewire,
    SiLaravel,
    SiSpringboot,
    SiPhp,
    SiClaudecode,
    SiFigma,
    SiGit,
} from 'react-icons/si'

const frontend = [
    { icon: <SiReact />, label: 'React' },
    { icon: <SiTypescript />, label: 'TypeScript' },
    { icon: <SiJavascript />, label: 'JavaScript' },
    { icon: <SiAngular />, label: 'Angular', note: 'Sigo estudando' },
    { icon: <SiLivewire />, label: 'Livewire' },
]

const backend = [
    { icon: <SiLaravel />, label: 'Laravel' },
    { icon: <SiSpringboot />, label: 'Spring Boot', note: 'Sigo estudando' },
    { icon: <SiPhp />, label: 'PHP' },
]

const tools = [
    { icon: <SiClaudecode />, label: 'Claude Code' },
    { icon: <SiFigma />, label: 'Figma' },
    { icon: <SiGit />, label: 'Git' },
]

const Stack = () => {
    return (
        <section className={styles.stack} id="stack">
            <div className={styles.inner}>
                <h2 className={styles.title}>
                    Minhas Stacks<span className="cursor">_</span>
                </h2>

                <div className={styles.intro}>
                    <p className={styles.text}>
                        Minha stack combina tecnologias que já fazem parte da minha
                        experiência profissional com outras que venho explorando e estudando.
                        Tenho <b>experiência profissional</b> com <b>HTML, CSS, Bootstrap, JavaScript, Laravel e Livewire</b>,
                        além de estar ampliando meus conhecimentos em React, TypeScript, Angular,
                        Java e Spring Boot.
                    </p>

                    <p className={styles.text}>
                        Gosto de explorar novas tecnologias na prática e entender como elas podem
                        contribuir para criar interfaces melhores e soluções mais completas.
                    </p>
                </div>

                <div className={styles.groups}>
                    <StackGroup title="Frontend" items={frontend} />
                    <StackGroup title="Backend" items={backend} />
                    <StackGroup title="Ferramentas" items={tools} />
                </div>
            </div>
        </section>
    )
}

export default Stack
