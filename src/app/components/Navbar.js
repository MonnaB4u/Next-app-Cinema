import Image from "next/image"
import styles from "../styles/navbar.module.css"
import Link from "next/link"
import SideNav from "./SideNav"

const Navbar = () => {
    return (
        <div>
            <header className={styles.main_header}>
                <div className={styles.navbar_brand}>
                    <Link href="/">
                        <Image src="/theaterlogo.png" height={60} width={200}></Image>
                    </Link>
                    <nav></nav>
                </div>
                <SideNav/>
            </header>
        </div>
    )
}

export default Navbar
