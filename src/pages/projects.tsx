import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import NavigationBar from "../components/navigation";
import HeaderBar from "../components/header";
import CertificateSelector from "../components/cert-selector";
import * as styles from './index.module.css'
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Project from "../components/project";

interface ProjectNode {
  childMdx: {
    frontmatter: {
      title: string
      date: string
      link: string
      technologies: string[]
    }
    body: string
  }
}

interface ProjectProps extends PageProps {
  data: {
    allFile: {
      nodes: ProjectNode[]
    }
  }
}

const IndexPage: React.FC<ProjectProps> = ({ data }: ProjectProps) => {
  const { currentCertificateId } = useContext(GlobalContext);
  return (
    <main>
      <HeaderBar />
      <NavigationBar />
      {/* at first just list all projects out */}
      {/* then sort all by year */}
      {/* then list each by latest projects */}
      {/* !TODO: ADD A PROJECT HIGHLIGHT TO SPOTLIGHT MOST SIGNIFICANT PROJECTS */}
      {data.allFile.nodes.map((node) => (
        <Project key={node.childMdx.frontmatter.title} projectInfo={{ title: node.childMdx.frontmatter.title, year: new Date(node.childMdx.frontmatter.date).getFullYear(), link: node.childMdx.frontmatter.link, technologies: node.childMdx.frontmatter.technologies, description: node.childMdx.body }} />
      ))}
    </main>
  )
}
// sort: {frontmatter: {date: DESC}}

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "projects"}, internal: {}}
      sort: {childMdx: {frontmatter: {date: DESC}}}
    ) {
      nodes {
        childMdx {
          frontmatter {
            title
            link
            technologies
            date
          }
          body
        }
      }
    }
  }
`


export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
