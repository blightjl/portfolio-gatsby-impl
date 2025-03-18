export interface ProjectInfo {
    title: string;
    year: number;
    description: string;
    link: string;
    technologies: string[];
}

export interface CertificateInfo {
    issuer: string;
    dateAcquired: string;
    expirationDate: string;
    credentialLink: string;
}