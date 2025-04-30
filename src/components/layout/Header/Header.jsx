import Link from 'next/link';
import styles from './Header.module.scss';
// CODEFEED ICON: https://react-icons.github.io/react-icons/search?q=mdoutlinecodeoff
// import { MdOutlineCodeOff } from 'react-icons/md';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href='/'>
          &lt;
          <span className={styles.logoCore}>&nbsp;codefeed&nbsp;</span>
          &#47;&gt;
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'><span>Code</span>Feed</Link>
          </li>
          <li>
            <Link href='/news/aus'><span>Aus</span>Feed</Link>
          </li>
          <li>
            <Link href='/news/world'><span>Globe</span>Feed</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;