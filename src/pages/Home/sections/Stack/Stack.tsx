import styles from './Stack.module.css'
import StackGroup from '../../../../components/stack-group/StackGroup'
import CertificateCard from '../../../../components/certificate-card/CertificateCard'
import EngenhariaSoftwarePdf from '../../../../assets/images/certificados/Engenharia de Software.pdf'
import UiParaDevsPdf from '../../../../assets/images/certificados/UI para devs.pdf'
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

const certificates = [
    { title: 'Engenharia de Software', hours: '86h', platform: 'Alura', pdf: EngenhariaSoftwarePdf },
    { title: 'UI para Devs', hours: '24h', platform: 'Alura', pdf: UiParaDevsPdf },
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

                <div className={styles.certificates}>
                    <h3 className={styles.certTitle}>Certificados em destaque</h3>

                    <div className={styles.certGrid}>
                        {certificates.map((cert) => (
                            <CertificateCard key={cert.title} {...cert} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stack
