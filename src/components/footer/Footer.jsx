import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>lamadev</div>
      <div className={styles.text}>
        Developed by Binayaraj Soti © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;