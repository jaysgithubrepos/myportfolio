import styles from "./AboutMe.module.css";
const AboutMe =() =>{

return(

<div className={styles.aboutmeDiv}>
  <div className={styles.aboutMesSecondDiv}>
    <h3 className={styles.aboutHeading}>{"{"}/{"}"}</h3>
    <h2>{"<"}about_me{">"}</h2>
    <p>...lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
  </div>
</div>

)

}

export default AboutMe;