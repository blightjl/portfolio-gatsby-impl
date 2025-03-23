import * as React from 'react';
import { useState, useContext, useEffect } from "react"
import * as styles from './cert-selector.module.css';
import { GlobalContext, CERTIFICATE } from '../context/GlobalContext';
import { CertificateInfo } from "../types/types"
import { getEnumByValue } from '../utils/utils';


const CertificateSelector: React.FC = () => {
  const { currentCertificateId, setCertificateId } = useContext(GlobalContext);
  const [currentCertificateInfo, setCertificateInfo] = useState<CertificateInfo>({
    issuer: "",
    dateAcquired: "",
    expirationDate: "",
    credentialLink: "",
  });

  const setNewCertificateId = ( newCertificate: CERTIFICATE) => {
    console.log(newCertificate);
    setCertificateId(newCertificate);
  };

  useEffect(() => {
    const activeCertificate = certificates.find(cert => cert.issuer === currentCertificateId) ?? {
      issuer: "N/A",
      dateAcquired: "N/A",
      expirationDate: "N/A",
      credentialLink: "N/A",
    };
    const newCertificateInfo = {
      issuer: activeCertificate.issuer,
      dateAcquired: activeCertificate.dateAcquired,
      expirationDate: activeCertificate.expirationDate,
      credentialLink: activeCertificate.credentialLink,
    };
    setCertificateInfo(newCertificateInfo);
  }, [currentCertificateId]);

  const certificates: CertificateInfo[] = [
    {
      issuer: 'CompTIA Security+',
      dateAcquired: '',
      expirationDate: '',
      credentialLink: '',
    },
    {
      issuer: 'CompTIA Network+',
      dateAcquired: '',
      expirationDate: '',
      credentialLink: '',
    },
    {
      issuer: 'AWS Cloud Certified Practitioner',
      dateAcquired: 'N/A',
      expirationDate: 'N/A',
      credentialLink: 'N/A',
    },
    {
      issuer: 'Certified Cisco Network Associate',
      dateAcquired: 'N/A',
      expirationDate: 'N/A',
      credentialLink: 'N/A',
    }
  ];

    return (
        <div>
            {currentCertificateId}
            <nav className={styles.certificates}>
                <ul>
              {certificates.map(cert => (
                <li key={cert.issuer}>
                  <a
                className={currentCertificateId === cert.issuer ? `${styles.active}` : ''}
                    style={{ cursor: "pointer" }}
                    onClick={() => setNewCertificateId(CERTIFICATE[getEnumByValue(cert.issuer)])}>
                    <span className={styles.certName}>{cert.issuer}</span>
                  </a>
                </li>
              ))}
                </ul>
            </nav>
        </div>
    );
};

export default CertificateSelector;