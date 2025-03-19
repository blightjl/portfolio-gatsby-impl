

import * as React from 'react';
import { CertificateInfo } from '../types/types';
import { carousel, card } from './certificate.module.css'

interface CertificateInfoProps {
    certificateInfo: CertificateInfo;
}

const CertificateCard: React.FC<CertificateInfoProps> = ( { certificateInfo } ) => { // destructoring
    return (
        <div className={card}>
        <div>ISSUER: {certificateInfo.issuer}</div>
        <div>DATE ACQUIRED: {certificateInfo.dateAcquired}</div>
        <div>EXPIRATION DATE: {certificateInfo.expirationDate}</div>
        <div>
          CREDENTIAL:{' '}
          {certificateInfo.credentialLink !== 'N/A' ? (
            <a
              href={certificateInfo.credentialLink}
              target="_blank"
              rel="noopener noreferrer"            >
              {certificateInfo.credentialLink}
            </a>
          ) : (
            'N/A'
          )}
        </div>
      </div>
    );
};

export default CertificateCard