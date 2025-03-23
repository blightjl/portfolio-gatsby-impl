import * as React from "react"
import { useState, useContext, useEffect } from "react"
import { CertificateInfo } from "../types/types"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import HeaderBar from "../components/header"
import NavigationBar from "../components/navigation"
import CertificateSelector from "../components/cert-selector"
import CertificateCard from "../components/certificate"
import { GlobalContext, CERTIFICATE } from "../context/GlobalContext"
import CertificateDisplay from '../components/certificate-display'
import { getEnumByValue } from "../utils/utils"

// use ENUMs instead of string

const Certificates: React.FC = () => {
  const { currentCertificateId, setCertificateId } = useContext(GlobalContext);
  const [currentCertificateInfo, setCertificateInfo] = useState<CertificateInfo>({
    issuer: "",
    dateAcquired: "",
    expirationDate: "",
    credentialLink: "",
  });

  const setNewCertificateId = (newCertificate: CERTIFICATE) => {
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
      dateAcquired: '07/19/2024',
      expirationDate: '07/19/2027',
      credentialLink: 'https://www.credly.com/badges/45e11fe9-ffb9-4f0b-82a6-57b7b96af190/public_url',
    },
    {
      issuer: 'CompTIA Network+',
      dateAcquired: '06/20/24',
      expirationDate: '07/19/2027',
      credentialLink: 'https://www.credly.com/badges/0e00b37b-f289-46ba-99b8-1ca0ecce4839/public_url',
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
      <HeaderBar />
      <NavigationBar />
      <CertificateDisplay certificateInfo={currentCertificateInfo}/>
    </div>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "certificates"}, internal: {}}
      sort: {childMdx: {frontmatter: {date: DESC}}}
    ) {
      nodes {
        childMdx {
          frontmatter {
            date_acquired
            expiration_date
            issuer
            link
          }
          body
        }
      }
    }
  }
`

export default Certificates

export const Head: HeadFC = () => <title>Certificates Page</title>
