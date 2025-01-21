import styles from './Navbar.module.css';
import { FaRegQuestionCircle, FaUserCircle } from 'react-icons/fa'; // Icons from react-icons

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>S</div>
        <span className={styles.projectName}>Gupshup Marketing</span>
      </div>
      <div className={styles.right}>
        <FaRegQuestionCircle className={styles.icon} title="Help" />
        <FaUserCircle className={styles.icon} title="Account" />
      </div>
    </nav>
  );
}
