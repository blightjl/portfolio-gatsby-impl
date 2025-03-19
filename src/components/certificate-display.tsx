import * as React from 'react';
import CertificateCard from './certificate';
import CertificateSelector from './cert-selector';

const CertificateDisplay: React.FC = () => {
    return (
        <div><CertificateSelector />
            <CertificateCard certificateInfo={ } />
        </div>
    );
};

export default CertificateDisplay;