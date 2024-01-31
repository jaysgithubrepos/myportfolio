import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navigation.module.css";
const Navigation = () =>{

return (

  <nav className={`${styles.navbar} bg-transparent`}>
  <div className={`${styles.navcontainer} container mx-auto`}>
    <div className="flex items-center justify-between">
      <div className="text-white font-bold text-lg">
        <p className="text-3xl">//  jai</p>
        <p className="text-2xl ml-2">web_dev</p>
      </div>
      <div className="space-x-4">
      <ul className={styles.listLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        
      </ul>
      </div>
    </div>
  </div>
</nav>


)



}

export default Navigation;