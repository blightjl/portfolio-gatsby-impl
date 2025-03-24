import * as React from 'react';
import CertificateSelector from './cert-selector';
import CertificateCard from './certificate';
import { CertificateInfo } from 'src/types/types';
import * as styles from './certificate-display.module.css'
interface CertificatesProps {
    certificateInfo: CertificateInfo;
    certificateNames: string[];
}

const CertificateDisplay: React.FC<CertificatesProps> = ({ certificateInfo, certificateNames }) => {
    return (
        <div className={styles.displayCertificates}>
            <div className={styles.leftDisplay}><CertificateSelector certificateNames={certificateNames} /></div>
            <div className={styles.rightDisplay}><div className={styles.carousel}><CertificateCard certificateInfo={certificateInfo} /></div></div>
        </div>
    );
};

export default CertificateDisplay;