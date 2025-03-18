import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import NavigationBar from "../components/navigation"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <NavigationBar />
      <StaticImage
      alt="Josan's Profile Picture"
      src="../images/profile_picture.jpeg"/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
