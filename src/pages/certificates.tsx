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

interface CertificateNode {
  childMdx: {
    frontmatter: {
      issuer: string
      date_acquired: string
      expiration_date: string
      link: string
    }
    body: string
  }
}

interface CertificateProps extends PageProps {
  data: {
    allFile: {
      nodes: CertificateNode[]
    }
  }
}

const Certificates: React.FC<CertificateProps> = ({ data }: CertificateProps) => {
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

  const certificates: CertificateInfo[] =
    data.allFile.nodes.map((node) => ({
      issuer: node.childMdx.frontmatter.issuer,
      dateAcquired: node.childMdx.frontmatter.date_acquired,
      expirationDate: node.childMdx.frontmatter.expiration_date,
      credentialLink: node.childMdx.frontmatter.link,
    }));


  return (
    <div>
      <HeaderBar />
      <NavigationBar />
      <CertificateDisplay certificateNames={certificates.map((certInfo) => (certInfo.issuer))} certificateInfo={currentCertificateInfo} />
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
            issuer
            date_acquired
            expiration_date
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
