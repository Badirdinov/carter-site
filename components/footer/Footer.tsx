import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../footer/footer.module.scss'
import Logo from '../../public/logo.svg'
import Text from '../../public/text.svg'



const NAV__LINK = [
    {
        path: "/",
        display: "Главная",
    },
    {
        path: "#about",
        display: "Каталог",
    },
    {
        path: "#service",
        display: "Про нас",
    },
    {
        path: "#portfolio",
        display: "Конаткты",
    }
];





export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.footer__item}>
                    <div className={styles.logo}>
                        <Image src={Text} alt='/' />
                        <Image className={styles.supLogo} src={Logo} alt='/' />
                    </div>
                    <div className={styles.navigation}>
                        <nav>
                            {NAV__LINK.map((item, index) => (
                                <Link href={item.path} key={index}>
                                    {item.display}
                                </Link>
                            ))}
                        </nav>
                    </div>

                </div>
                <div className={styles.sup__footer}>
                    <a href='#'>© Mangoose Marine 2023 - Privacy Policy</a>
                    <a href='#' className={styles.title}>Created by PROlab</a>
                </div>
            </div>
        </div>

    )
}
