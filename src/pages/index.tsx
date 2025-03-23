import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import NavigationBar from "../components/navigation";
import HeaderBar from "../components/header";
import CertificateSelector from "../components/cert-selector";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import * as styles from './index.module.css'


console.log("TESTING");
console.log(styles);

const IndexPage: React.FC<PageProps> = () => {
  const { currentCertificateId } = useContext(GlobalContext);
  return (
    <main>
      <HeaderBar />
      <NavigationBar />
      <div className={styles.aboutMeContent}>
        <div className={styles.contentOne}>
          <div className={styles.leftDisplay}>
            <div className={styles.leftContent}>
              <div className={styles.profilePictureShade}>
                <div className={styles.profilePicture}>
                <StaticImage
                    alt="Josan's Profile Picture"
                    src="../images/profile_picture.webp" />
                  </div>
              </div>
            </div>
          </div>
          <div className={styles.rightDisplay}>
            <div className={styles.rightContent}>Here’s my go at a portfolio!<br />
              How is it? Whatever your<br />
              answer is I hope you<br />
              have learned a<br />
              little more<br />
              about<br />
              me.
            </div>
          </div>
        </div>
        <div className={styles.contentTwo}>
          Now here's some more!
        </div>
        <div className={styles.contentThree}>
          <div className={styles.rightContent}>I think technology and Computer Science is pretty cool as you may have
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
