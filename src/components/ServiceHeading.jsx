import styles from "./ServiceHeading.module.css";
import { ReactTyped } from "react-typed";
const ServiceHeading =() =>{

  const service = [
    "{ _web designer }",
    "{ _front-end developer }",
    "{ _full-stack engineer }"
  ];
  return(
    <div className={styles.serviceHeading}>
      <ul>
        {service.map((item, index) => (
          <li key={index}>
            
            <ReactTyped
          strings={[item]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar=">"
          showCursor={true}
        />
            </li>
        ))}
      </ul>
    </div>
  
  );
}
export default ServiceHeading;