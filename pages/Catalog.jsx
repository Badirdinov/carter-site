import React from 'react'
import styles from '@/styles/catalog.module.scss'
import CatalogItem from '@/components/catalog/CatalogItem'





export default function Catalog () {
    return (
        <div className={styles.container}>
            <div className={styles.catalog}>
                <div className={styles.catalog__item}>
                    <h3>
                        Бестселлеры
                    </h3>
                    <CatalogItem />
                </div>
            </div>
        </div>
    )
}


