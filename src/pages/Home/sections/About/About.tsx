import styles from './About.module.css'
import Avatar from '../../../../assets/images/avatar.png'
import { FaMedal, FaGraduationCap } from 'react-icons/fa'
import InfoCard from '../../../../components/info-card/InfoCard'

const About = () => {
    return (
        <section className={styles.about} id="sobre">
            <div className={styles.inner}>
                <div className={styles.photoCol}>
                    <img className={styles.photo} src={Avatar} alt="Caio Scura" />
                </div>

                <div className={styles.content}>
                    <h2 className={styles.title}>Sobre mim<span className="cursor">_</span></h2>

                    <p className={styles.text}>
                        Sou desenvolvedor Full Stack, formado em <b>Análise e Desenvolvimento de Sistemas</b>  
                        pela Fatec Itapetininga. Tenho experiência no desenvolvimento de aplicações web, 
                        atuando principalmente na criação de interfaces, funcionalidades e integrações 
                        entre sistemas.
                    </p>

                    <p className={styles.text}>
                        Na minha experiência profissional, atuei no desenvolvimento e evolução de sistemas de gestão, 
                        contribuindo na criação de fluxos e processos, automação de tarefas, integração entre sistemas 
                        e implementação de melhorias e correções.
                    </p>

                    <p className={styles.text}>
                        Gosto de transformar ideias em soluções funcionais e intuitivas, dando atenção tanto à 
                        experiência de quem utiliza quanto à organização e qualidade do código. Busco continuar 
                        evoluindo como desenvolvedor, explorando novas tecnologias e formas de criar experiências 
                        digitais cada vez melhores.
                    </p>

                    <div className={styles.cards}>
                        <InfoCard
                            icon={<FaMedal />}
                            title="Experiência"
                            lines={['3 anos', 'Desenvolvimento Full Stack']}
                        />

                        <InfoCard
                            icon={<FaGraduationCap />}
                            title="Educação"
                            lines={['Análise e Desenvolvimento de Sistemas']}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
