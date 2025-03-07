import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <h1 className={styles.title}>Kadri Saed</h1>
      <p>8 Oluwatoyin Street, Lagos, Nigeria</p>
      <p>+234 8157536798 | saed.leo@gmail.com</p>
      <div className={styles.socials}>
       
        <a href="https://www.instagram.com/cmsteam_hm?igsh=Yz1jYTk10Dg3Zg==" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/actions/f1 (2).png" alt="social-icon"
          className={styles.icon}
          />
        </a>

        <a href="https://www.instagram.com/cmsteam_hm?igsh=Yz1jYTk10Dg3Zg==" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/actions/lindedin.png" alt="social-icon"
          className={styles.icon}
          />
        </a>

        <a href="https://www.instagram.com/cmsteam_hm?igsh=Yz1jYTk10Dg3Zg==" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/actions/f1 (1).png" alt="social-icon"
          className={styles.icon}
          />
        </a>

      </div>
    </footer>
  );
};