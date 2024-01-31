import styles from "./About.module.css";
import { ReactTyped } from "react-typed";
const About = () =>{

  return(
  <div className={styles.introductionTopBar}>
  <h6 className={styles.introduction}>// hi, I'm JAY, a...</h6>
  
    <div className={styles.aboutMeDiv}>
    <span className={`${styles.leftCurlyBrace} text-center`}>{'{"'}</span>
    <span className={`${styles.aboutMe} text-center`}>
        {" "}
        <ReactTyped
          strings={["_front-end developer", "_backend Developer", "Shopify Developer"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar="|"
          showCursor={true}
        />
         </span>
         <span className={`${styles.leftCurlyBrace} text-center`}>{'"}'}</span>
         </div>
         <h5 className={styles.animation}>=={">"}</h5>
  </div>

  );

}

export default About;