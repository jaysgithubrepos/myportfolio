import Portfolio1 from "../assets/images/work-07.jpg";
import Portfolio2 from "../assets/images/work-04.jpg";
import Portfolio3 from "../assets/images/work-03.jpg";
import styles from "./PortfolioDescription.module.css";
const PortfolioDescription =() =>{

  return(
    <div className={`${styles.portfolioMain} grid grid-cols-2`}>
    <div className={`${styles.portfolioMaindiv} grid grid-cols-2`}>
    <div  className={styles.portfolioImage1}>
    <img src={Portfolio1} alt="Description of the image" />
    <h5 className={styles.firstparagraph}>{"{"}JANE Blogger{"}"}</h5>
    <p className={styles.secondparagraph}>//...website design & lorem ipsum dolor sit amet, consectetur adipiscing elit; ut elit tellus, luctus nec ullamcorper mattis;</p>
    </div>
    <div  className={styles.portfolioImage2}>
    <img src={Portfolio2} alt="Description of the image" />
    <h5 className={styles.firstparagraph}>{"{"}JANE Blogger{"}"}</h5>
    <p className={styles.secondparagraph}>//...website design & lorem ipsum dolor sit amet, consectetur adipiscing elit; ut elit tellus, luctus nec ullamcorper mattis;</p>
    </div>
    </div>

    <div className={`${styles.portfolioMainSecond}`}>
    <div  className={styles.portfolioImage3}>
      <img src={Portfolio3} alt="Description of the image" />
       <h5 className={styles.firstparagraph}>{"{"}JANE Blogger{"}"}</h5>
       <p className={styles.secondparagraph}>//...website design & lorem ipsum dolor sit amet, consectetur adipiscing elit; ut elit tellus, luctus nec ullamcorper mattis;</p>

      </div>

   </div>
</div>

  )

}

export default PortfolioDescription;