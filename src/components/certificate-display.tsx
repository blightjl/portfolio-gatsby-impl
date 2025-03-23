import * as React from 'react';
import CertificateSelector from './cert-selector';
import CertificateCard from './certificate';
import { CertificateInfo } from 'src/types/types';

interface CertificateInfoProps {
    certificateInfo: CertificateInfo;
}

const CertificateDisplay: React.FC<CertificateInfoProps> = ( { certificateInfo } ) => {
    return (
        <div>
            <CertificateSelector />
            <CertificateCard certificateInfo={ certificateInfo } />
        </div>
    );
};

export default CertificateDisplay;