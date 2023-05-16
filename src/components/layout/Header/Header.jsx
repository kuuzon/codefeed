import Link from 'next/link';
import styles from './Header.module.scss';
// CODEFEED ICON: https://react-icons.github.io/react-icons/search?q=mdoutlinecodeoff
// import { MdOutlineCodeOff } from 'react-icons/md';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href='/'>
          <span className={styles.logoEnds}>&lt; </span> 
          <span className={styles.logoMain}>codefeed </span>
          <span className={styles.logoEnds}>&#47;&gt;</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'><span>Code</span>Feed</Link>
          </li>
          <li>
            <Link href='/ausnews'><span>Aus</span>Feed</Link>
          </li>
          <li>
            <Link href='/worldnews'><span>Globe</span>Feed</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;