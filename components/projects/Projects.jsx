import React from 'react'
import Image from 'next/image'
import styles from '@/styles/projects.module.scss'
import Link from 'next/link'
import LinkArrow from '@/public/linkArrow.svg'
import Project1 from '@/public/project1.png'
import ArrowLeft from '@/public/arrowBtnLeft.svg'
import ArrowRight from '@/public/arrowBtnRight.svg'
import Project2 from '@/public/project2.png'

var $ = require("jquery");
if (typeof window !== "undefined") {
    // Client-side-only code
    window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const Responsive = {
    0: {
        items: 5,
        margin: 50
    },
    768: {
        items: 10,
        margin: 50
    },
    1024: {
        items: 2.5,
        margin: 100
    }
}




export default function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.projects}>
                <div className={styles.projects__item}>
                    <div className={styles.title}>
                        <h3>
                            От слов к делу,
                            выполненые проекты
                        </h3>
                    </div>
                    <div className={styles.suptitle}>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when
                        </p>
                        <Link href='/'>
                            увидеть больше
                            <Image src={LinkArrow} alt='/' />
                        </Link>
                    </div>
                </div>
                <div className={styles.corusel}>
                    <OwlCarousel
                        responsive={Responsive}
                    >
                        <div className={styles.corusel__img}>
                            <div className={styles.img__item}>
                                1
                            </div>
                            <Image src={Project1} alt='/' />
                        </div>
                        <div className={styles.corusel__img}>
                            <div className={styles.img__item}>
                                2
                            </div>
                            <Image src={Project2} alt='/' />
                        </div>
                        <div className={styles.corusel__img}>
                            <div className={styles.img__item}>
                                3
                            </div>
                            <Image src={Project1} alt='/' />
                        </div>
                    </OwlCarousel>
                </div>
                <div className={styles.corusel__btns}>
                    <div className={styles.corusel__btn}>
                        <button>
                            <Image src={ArrowLeft} alt='/' />
                        </button>
                        <button>
                            <Image src={ArrowRight} alt='/' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
