import styles from "./ButtonDescription.module.css";

const ButtonDescription =()=>
{
  return(
    <div className={styles.btnDesDiv}>
    <button className={styles.buttonDescription}>
      {"{"}
      read more
      {"}"}
    </button>
    </div>
 
    )




}

export default ButtonDescription;