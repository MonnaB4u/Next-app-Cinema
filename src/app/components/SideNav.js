import Link from 'next/link'
import styles from '../styles/navbar.module.css'

const SideNav = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <div className="">
                    <ul className={styles.navbarList}>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="/"> Home </Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="/about"> About </Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="/movie"> Movies </Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="/contact"> Contact </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default SideNav

