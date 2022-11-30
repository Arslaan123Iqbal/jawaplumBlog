import React from 'react'
import Link from "next/link";  
import styles from '../../styles/Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.main}>
            <div className={styles.logo}>
            JAWAPLUM|BLOG
           </div>
           <div>Blog</div>
           <Link href="/" className={styles.link}>
                Visit
            </Link>
        </nav>
    )
}

export default Navbar;