import React, { createContext, useState, useContext } from 'react';

export enum CERTIFICATE {
    NETWORK = 'CompTIA Network+',
    SECURITY = 'CompTIA Security+',
    AWS_CCP = 'AWS Cloud Certified Practitioner',
    CCNA = 'Certified Cisco Network Associate',
}

type GlobalContextType = {
    currentCertificateId: CERTIFICATE;
    setCertificateId: (value: CERTIFICATE) => void;
}

export const GlobalContext = createContext<GlobalContextType>({
    currentCertificateId: CERTIFICATE.SECURITY,
    setCertificateId: () => { },
});

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentCertificateId, setCertificateId] = useState<CERTIFICATE>(CERTIFICATE.SECURITY);
    return (
        <GlobalContext.Provider value={{ currentCertificateId, setCertificateId }}>
            {children}
        </GlobalContext.Provider>
    );
};