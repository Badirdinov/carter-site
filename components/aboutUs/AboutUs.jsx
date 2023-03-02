import React from 'react'
import Image from 'next/image'
import styles from '../../styles/aboutUs.module.scss'
import Vk from '../../public/vkontacte.svg'
import Instagram from '../../public/instagram.svg'
import Facebook from '../../public/facebook.svg'
import Telegram from '../../public/telegram.svg'
import Link from 'next/link'


export default function AboutUs() {
    return (
        <div className={styles.container}>
            <div className={styles.about}>
                <div className={styles.about__title}>
                    <h3>
                        Про нас
                    </h3>
                    <p>
                        Миссия компании: стать надёжным другом и поставщиком владельцу судна! <br />
                        О компании: Компания Mangoose-marine предлагает полный спектр услуг в области подбора и продажи судового и навигационного оборудования. Мы стараемся работать напрямую с производителями. Всегда слышим наших Клиентов, готовы проконсультировать и подобрать соответствующее оборудование под самые сложные проекты и индивидуальные потребности. <br />
                        В компании работают специалисты с многолетним стажем работы, которые регулярно повышают свою квалификацию.
                    </p>
                    <div className={styles.about__icons}>
                        <Link href='/'>
                            <Image src={Vk} alt='/' />
                        </Link>
                        <Link href='/'>
                            <Image src={Facebook} alt='/' />
                        </Link>
                        <Link href='/'>
                            <Image src={Instagram} alt='/' />
                        </Link>
                        <Link href='/'>
                            <Image src={Telegram} alt='/' />
                        </Link>
                    </div>
                </div>
                <div className={styles.about__slider}>
                    <div className={styles.box__slider}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
};
