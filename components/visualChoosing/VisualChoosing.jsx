import React from 'react'
import Image from 'next/image'
import styles from '../../styles/visual-choosing.module.scss'
import Link from 'next/link'

import Choosing1 from '../../public/choosing1.png'
import Choosing2 from '../../public/choosing2.png'
import Choosing3 from '../../public/choosing3.png'
import Choosing4 from '../../public/choosing4.png'



export default function VisualChoosing()  {
    return (
        <div className={styles.container}>
            <h3>
                Визуальный подбор деталей
            </h3>
            <div className={styles.card}>
                <div className={styles.card__item}>
                    <div className={styles.img}>
                        <Link href='#'>
                            <Image className={styles.card__img} src={Choosing1} alt='/' />
                            <h6>Яхты премиум класса</h6>
                        </Link>
                    </div>
                </div>
                <div className={styles.card__item}>
                    <div className={styles.img}>
                        <Link href='#'>
                            <Image className={styles.card__img} src={Choosing2} alt='/' />
                            <h6>Яхты премиум класса</h6>
                        </Link>
                    </div>
                </div>
                <div className={styles.card__item}>
                    <div className={styles.img}>
                        <Link href='#'>
                            <Image className={styles.card__img} src={Choosing3} alt='/' />
                            <h6>Яхты премиум класса</h6>
                        </Link>
                    </div>
                </div>
                <div className={styles.card__item}>
                    <div className={styles.img}>
                        <Link href='#'>
                            <Image className={styles.card__img} src={Choosing4} alt='/' />
                            <h6>Яхты премиум класса</h6>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


