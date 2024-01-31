import styles from "./Description.module.css";
const Description = () =>{

  return(

    <div className={`${styles.descriptionMain} grid grid-cols-2`}>
    <div className={styles.descriptionFirstColumn}><h4>...I have over 12 years of experience in web development, with a strong background in both front-end and back-end technologies;</h4></div>
   
    <div className={styles.descriptionSecondColumn}><span>…curabitur sit amet luctus tortor, sit amet ultrices ante. Maecenas convallis dui arcu, et tempor felis consectetur vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed id velit ex. Cras ultricies nisi eget sem mollis, a maximus felis laoreet. Nam eget ultricies urna, vel ullamcorper arcu. Quisque feugiat rhoncus arcu, a tincidunt arcu lacinia ac. Maecenas molestie vel ante in finibus. Sed sit amet ligula eros. In hac habitasse platea dictumst;</span></div>
  </div>
  
  
    )

}
export default Description;