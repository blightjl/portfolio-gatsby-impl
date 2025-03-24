import * as React from 'react';
import { useState, useContext, useEffect } from "react";
import * as styles from './cert-selector.module.css';
import { GlobalContext, CERTIFICATE } from '../context/GlobalContext';
import { CertificateInfo } from "../types/types";
import { getEnumByValue } from '../utils/utils';

interface CertificatesNamesProps {
    certificateNames: string[];
}

const CertificateSelector: React.FC<CertificatesNamesProps> = ({ certificateNames }) => {
    const { currentCertificateId, setCertificateId } = useContext(GlobalContext);

    const setNewCertificateId = (newCertificate: CERTIFICATE) => {
        console.log(newCertificate);
        setCertificateId(newCertificate);
    };

    return (
        <div>
            <nav className={styles.certificates}>
                <ul>
                    {certificateNames.map((name: string) => (
                        <li key={name}>
                            <a
                                className={currentCertificateId === name ? `${styles.active}` : ''}
                                style={{ cursor: "pointer" }}
                                onClick={() => setNewCertificateId(CERTIFICATE[getEnumByValue(name)])}
                            >
                                <span
                                    className={currentCertificateId === name ? `${styles.active}` : ''}
                                >
                                    {name}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default CertificateSelector;