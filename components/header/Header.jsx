import React from 'react'
import Image from 'next/image'
import styles from '../header/header.module.scss'
import Logo from '../../public/logo.svg'
import Text from '../../public/text.svg'
import Link from 'next/link'


const NAV__LINK = [
    {
        path: "/",
        display: "Главная",
    },
    {
        path: "Catalog",
        display: "Каталог",
    },
    {
        path: "About",
        display: "Про нас",
    },
    {
        path: "Contacts",
        display: "Конаткты",
    }
];





export default function Header() {
    return (
        <div className={styles.headers}>
            <div className="max-w-[1820px] my-0 mx-auto relative w-full">
                <div className={styles.header}>
                    <div className={styles.header__item}>
                        <div className={styles.logo}>
                            <Link href='#'>
                                <Image src={Text} alt='/' />
                                <Image className={styles.supLogo} src={Logo} alt='/' />
                            </Link>
                        </div>
                        <div className={styles.navigation}>
                            <nav>
                                {NAV__LINK.map((item, index) => (
                                    <Link href={item.path} key={index}>
                                        {item.display}
                                    </Link>
                                ))}
                            </nav>
                            <button>
                                Консультация
                            </button>
                        </div>
                        <div className={styles.burgerMenu}>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

