import React, { ReactChildren } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'


type Props = {
    children: ReactChildren
}


export default function Layout({ children }: any) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

