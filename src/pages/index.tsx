import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
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



const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <HeaderBar />
      <NavigationBar />
      <div className={aboutMeContent}>
        <div className={contentOne}>
          <div className={leftDisplay}>
            <div className={leftContent}>
              <div className={profilePictureShade}>
                <div className={profilePicture}>
                <StaticImage
                    alt="Josan's Profile Picture"
                    src="../images/profile_picture.jpeg" />
                  </div>
              </div>
            </div>
          </div>
          <div className={rightDisplay}>
            <div className={rightContent}>Here’s my go at a portfolio!<br />
              How is it? Whatever your<br />
              answer is I hope you<br />
              have learned a<br />
              little more<br />
              about<br />
              me.
            </div>
          </div>
        </div>
        <div className={contentTwo}>
          Now here's some more!
        </div>
        <div className={contentThree}>
          <div className={rightContent}>I think technology and Computer Science is pretty cool as you may have
            guessed?.<br /><br />


            I enjoy [or rather enjoyed] playing gamed. I am proud to say I am one of the few ex-League players who
            have gotten out of the addiction.<br /><br />
            Besides this I enjoy studying and working on personal projects at the public library or a nearby
            café.<br /><br />
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
