import React from 'react'
import Image from 'next/image'
import Vk from '../../public/vkontacte.svg'
import Instagram from '../../public/instagram.svg'
import Facebook from '../../public/facebook.svg'
import Telegram from '../../public/telegram.svg'
import Link from 'next/link'


export default function AboutUs() {
    return (
        <div className='max-w-[1820px] w-full mx-auto mb-[140px]'>
        <div className=' flex items-center justify-center gap-x-[222px] border-[#A6B5CA] border-[1px] pt-[83px] pr-[105px] pb-[116px] pl-[71px]'>
            <div className='max-w-[880px] w-full'>
                <p className='text-[#636363] text-[20px] tracking-[0.04em] font-medium mb-[28px]'>
                    Миссия компании: стать надёжным другом и поставщиком владельцу судна! <br />
                    О компании: Компания Mangoose-marine предлагает полный спектр услуг в области подбора и продажи судового и навигационного оборудования. Мы стараемся работать напрямую с производителями. Всегда слышим наших Клиентов, готовы проконсультировать и подобрать соответствующее оборудование под самые сложные проекты и индивидуальные потребности. <br />
                    В компании работают специалисты с многолетним стажем работы, которые регулярно повышают свою квалификацию.
                </p>
                <div className='flex items-center gap-[16px]'>
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
            <div>
                <div className='w-[434px] h-[545px] colorSlider rounded-[147px]'>

                </div>
            </div>
        </div>
    </div>
    )
};
