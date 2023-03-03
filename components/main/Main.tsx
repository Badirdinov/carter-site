import React from 'react'
import Image from 'next/image'
import styles from '../main/main.module.scss'
import CardSvg from '../../public/detils.svg'



export default function Main() {
    return (
        <div className={styles.main__container}>
            <div className={styles.main}>
                <div className={styles.main__title}>
                    <h1> Чем я могу  быть полезен вам? </h1>
                    <div className={styles.main__suptitle}>
                        <div className={styles.main__card}>
                            <Image src={CardSvg} alt="/" />
                            <p>
                                Большой опыт в продаже и подбора
                                деталей морских и речных судов
                            </p>
                        </div>
                        <div className={styles.main__card_2}>
                            <Image src={CardSvg} alt="/" />
                            <p>
                                Понимание механизмов работы дилерской сети
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.main__slider}>
                    <div className={styles.box__slider}>
                    </div>
                </div>
            </div>
        </div>
    )
}

