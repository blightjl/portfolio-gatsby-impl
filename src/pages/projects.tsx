import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import NavigationBar from "../components/navigation";
import HeaderBar from "../components/header";
import CertificateSelector from "../components/cert-selector";
import {
  aboutMeContent,
  contentOne,
  contentTwo,
  contentThree,
  leftDisplay,
  leftContent,
  rightDisplay,
  rightContent,
  profileImage,
  profilePicture,
  profilePictureShade
} from './index.module.css'
import Project from "../components/project";

interface ProjectNode {
  frontmatter: {
    title: string
    date: string
    link: string
    technologies: string[]
  }
  body: string
}

interface ProjectProps extends PageProps {
  data: {
    allMdx: {
      nodes: ProjectNode[]
    }
  }
}

const IndexPage: React.FC<ProjectProps> = ({ data }: ProjectProps) => {
  return (
    <main>
      <HeaderBar />
      <NavigationBar />
      {/* at first just list all projects out */}
      {/* then sort all by year */}
      {/* then list each by latest projects */}
      {/* !TODO: ADD A PROJECT HIGHLIGHT TO SPOTLIGHT MOST SIGNIFICANT PROJECTS */}
      {data.allMdx.nodes.map((node) => (
        <Project key={node.frontmatter.title} projectInfo={{ title: node.frontmatter.title, year: new Date(node.frontmatter.date).getFullYear(), link: node.frontmatter.link, technologies: node.frontmatter.technologies, description: node.body }} />
      ))}
    </main>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: {sourceInstanceName: {eq: "projects"}}
      sort: {frontmatter: {date: DESC}}
      ) {
      nodes {
        frontmatter {
          title
          date
          link
          technologies
        }
        body
      }
    }
  }
`


export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
