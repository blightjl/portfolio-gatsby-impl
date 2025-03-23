import * as React from 'react';
import CertificateSelector from './cert-selector';
import CertificateCard from './certificate';
import { CertificateInfo } from 'src/types/types';
import * as styles from './certificate-display.module.css'


/*
css class names being used:
> displayCertificates

> leftDisplay
> leftComponent

> rightDisplay
> carousel

*/

interface CertificateInfoProps {
    certificateInfo: CertificateInfo;
}

const CertificateDisplay: React.FC<CertificateInfoProps> = ( { certificateInfo } ) => {
    return (
        <div className={styles.displayCertificates}>
            <div className={styles.leftDisplay}><CertificateSelector /></div>
            <div className={styles.rightDisplay}><div className={styles.carousel}><CertificateCard certificateInfo={ certificateInfo } /></div></div>
        </div>
    );
};

export default CertificateDisplay;