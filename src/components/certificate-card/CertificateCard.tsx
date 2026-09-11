import { FaCertificate, FaGraduationCap } from 'react-icons/fa'
import styles from './CertificateCard.module.css'

interface CertificateCardProps {
    title: string
    hours: string
    platform: string
    
    //url do pdf do certificado
    pdf: string
}


// card de certificado
const CertificateCard = ({ title, hours, platform, pdf }: CertificateCardProps) => {
    return (
        <a className={styles.card} href={pdf} target="_blank" rel="noreferrer">
            <div className={styles.icon}>
                <FaCertificate />
            </div>

            <div>
                <h4 className={styles.title}>{title}</h4>

                <div className={styles.meta}>
                    <span className={styles.platform}>
                        <FaGraduationCap />
                        {platform}
                    </span>
                    <span className={styles.sep}>•</span>
                    <span>{hours}</span>
                </div>
            </div>
        </a>
    )
}

export default CertificateCard
