import React from 'react'
import Link from "next/link";  
import styles from '../../styles/Navbar.module.scss';
import leaf from '../assets/Vector.svg'
import Image from 'next/image';
const Navbar = () => {
    return (
        <nav className={styles.main}>
            <div className={styles.logo}>
            JAWAPLUM|    <Image
      
      src={leaf}
      alt="Picture of the author"
      width={25}
      height={25}
    />
           </div>
           <div>Contacts</div>
           <Link href="/" className={styles.link}>
                Visit
            </Link>
        </nav>
    )
}

export default Navbar;