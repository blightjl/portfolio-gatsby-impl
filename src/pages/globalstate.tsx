import * as React from "react"
import { useState, useContext } from "react"
import { type HeadFC } from "gatsby"
import { GlobalContext, GlobalProvider, CERTIFICATE } from "../context/GlobalContext"
import NavigationBar from "../components/navigation"


// use ENUMs instead of string

const Certificates: React.FC = () => {
  const { currentCertificateId, setCertificateId } = useContext(GlobalContext);

  const setNewCertificateId = ( newCertificate: CERTIFICATE) => {
    console.log(newCertificate);
    setCertificateId(newCertificate);
  };

  return (
    <div>
      <NavigationBar />
      The values: {currentCertificateId} <br/>
      <button onClick={() => setNewCertificateId(CERTIFICATE.NETWORK)}>network</button>
      <button onClick={() => setNewCertificateId(CERTIFICATE.SECURITY)}>security</button>
      <button onClick={() => setNewCertificateId(CERTIFICATE.AWS_CCP)}>awsccp</button>
      <button onClick={() => setNewCertificateId(CERTIFICATE.CCNA)}>ccna</button>
    </div>
  )
}

export default Certificates

export const Head: HeadFC = () => <title>Testing States</title>
