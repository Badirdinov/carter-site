import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Vk from '../public/vkontacte.svg'
import Instagram from '../public/instagram.svg'
import Facebook from '../public/facebook.svg'
import Telegram from '../public/telegram.svg'

const About = () => {
    return (
        <div className='pt-[177px] max-w-[1820px] my-0 mx-auto mb-[78px]'>
            <div className='border-[#A6B5CA] border-[1px] w-full'>
                <h3 className='text-center pt-[143px] text-[#385981] text-[120px] font-semibold mb-[32px]'>
                    Про нас
                </h3>
                <p className='text-center  w-[752px] mx-auto text-[20px] font-normal text-[#636363] mb-[222px]'>
                    Миссия компании: стать надёжным другом и поставщиком владельцу судна!
                    мы поможем вам проконсультироваться и помочь в подборе судна и деталей
                </p>
                <div className='flex flex-wrap mx-[42px] mb-[110px] justify-center gap-6 md:justify-between'>
                    <div className='w-[406px] border-[#A6B5CA] border-[1px] pt-[24px] pl-[24px] pr-[20px] pb-[39px]'>
                        <div className=''>
                            <h6 className='text-[36px] text-[#2A96CD] font-semibold mb-[10px]'>
                                200+
                            </h6>
                            <p className='text-[16px] font-medium text-[#636363]'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                            </p>
                        </div>
                    </div>
                    <div className='w-[406px] border-[#A6B5CA] border-[1px] pt-[24px] pl-[24px] pr-[20px] pb-[39px]'>
                        <div className=''>
                            <h6 className='text-[36px] text-[#2A96CD] font-semibold mb-[10px]'>
                                86+
                            </h6>
                            <p className='text-[16px] font-medium text-[#636363]'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                            </p>
                        </div>
                    </div>
                    <div className='w-[406px] border-[#A6B5CA] border-[1px] pt-[24px] pl-[24px] pr-[20px] pb-[39px]'>
                        <div className=''>
                            <h6 className='text-[36px] text-[#2A96CD] font-semibold mb-[10px]'>
                                12+
                            </h6>
                            <p className='text-[16px] font-medium text-[#636363]'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                            </p>
                        </div>
                    </div>
                    <div className='w-[406px] border-[#A6B5CA] border-[1px] pt-[24px] pl-[24px] pr-[20px] pb-[39px]'>
                        <div className=''>
                            <h6 className='text-[36px] text-[#2A96CD] font-semibold mb-[10px]'>
                                5+
                            </h6>
                            <p className='text-[16px] font-medium text-[#636363]'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                            </p>
                        </div>
                    </div>
                </div>
                <div className='max-w-[1820px] w-full mx-auto '>
                    <div className=' flex items-center justify-center gap-x-[222px]  pt-[83px] pr-[105px] pb-[116px] pl-[71px]'>
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
            </div>
        </div>
    )
}

export default About