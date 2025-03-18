import * as React from "react"
import { useState } from "react"
import { CertificateInfo } from "../types/types"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import HeaderBar from "../components/header"
import NavigationBar from "../components/navigation"




const Certificates: React.FC = () => {
  const [activeCert, setActiveCert] = useState<string>("cert1");
  const certificates: CertificateInfo[] = [
    {
      id: 'cert1',
      issuer: 'CompTIA Security+',
      dateAcquired: '07/19/2024',
      expirationDate: '07/19/2027',
      credentialLink: 'https://www.credly.com/badges/45e11fe9-ffb9-4f0b-82a6-57b7b96af190/public_url',
      credentialTitle: 'CompTIA Security+'
    },
    {
      id: 'cert2',
      issuer: 'CompTIA Network+',
      dateAcquired: '06/20/24',
      expirationDate: '07/19/2027',
      credentialLink: 'https://www.credly.com/badges/0e00b37b-f289-46ba-99b8-1ca0ecce4839/public_url',
      credentialTitle: 'CompTIA Network+'
    },
    {
      id: 'cert3',
      issuer: 'AWS CCP',
      dateAcquired: 'N/A',
      expirationDate: 'N/A',
      credentialLink: 'N/A',
      credentialTitle: 'N/A'
    },
    {
      id: 'cert4',
      issuer: 'CCNA',
      dateAcquired: 'N/A',
      expirationDate: 'N/A',
      credentialLink: 'N/A',
      credentialTitle: 'N/A'
    }
  ];

  const activeCertificate = certificates.find(cert => cert.id === activeCert);

  return (
    <div>
      <HeaderBar />
      <NavigationBar />
      <div className="displayCertificates">
      <div className="leftCertDisplay">
        <div className="leftComponent">
          <img className="upArrow" src="./icons/navigation_icon.png" alt="up arrow" />
        </div>
        <nav className="certificates">
          <ul>
            {certificates.map(cert => (
              <li key={cert.id}>
                <a
                  href={`#${cert.id}`}
                  className={activeCert === cert.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveCert(cert.id);
                  }}
                >
                  {cert.issuer}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="leftComponent">
          <img className="downArrow" src="./icons/navigation_icon.png" alt="down arrow" />
        </div>
      </div>
      <div className="rightCertDisplay">
        <div className="carousel">
          <div className="card">
            <div>ISSUER: {activeCertificate?.issuer}</div>
            <div>DATE ACQUIRED: {activeCertificate?.dateAcquired}</div>
            <div>EXPIRATION DATE: {activeCertificate?.expirationDate}</div>
            <div>
              CREDENTIAL:{' '}
              {activeCertificate?.credentialLink !== 'N/A' ? (
                <a
                  href={activeCertificate?.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={activeCertificate?.credentialTitle}
                >
                  {activeCertificate?.credentialLink}
                </a>
              ) : (
                'N/A'
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <StaticImage
      alt="Chrysler Building"
      src="../images/new-york-chrysler.jpg"/>
    </div>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: {sourceInstanceName: {eq: "certificates"}}
      sort: {frontmatter: {date: DESC}}
      ) {
      nodes {
        frontmatter {
          issuer
          date-acquired
          expiration-date
          link
        }
        body
      }
    }
  }
`

export default Certificates

export const Head: HeadFC = () => <title>Certificates Page</title>
