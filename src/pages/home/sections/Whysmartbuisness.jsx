import React from 'react'
import savetime from '../../../assests/img/feature/save-time.webp'
import watercost from '../../../assests/img/feature/water-cut.webp'
import accuracy from '../../../assests/img/feature/fire-more-accuracy.webp'
import available from '../../../assests/img/feature/earth-24x7-availability.webp'
import growth from '../../../assests/img/feature/ether-growth.webp'
import Whyus from './Whyus'
import Yourbusiness from './Yourbusiness'
import Ourprocess from './Ourprocess'

export default function Whysmartbuisness() {
    return (
        <div className='bg-[#121118] py-14'>
            <section className='container lg:px-28 px-7 m-auto text-white'>
                <h2 className='text-center font-urbanist lg:text-5xl text-4xl mb-12'>Why Smart Businesses Are <span className='text-[#b79af3]'>Switching</span> to
                    <span className='text-[#b79af3]'> AI</span></h2>

                <div className='grid xl:grid-cols-5 grid-cols-1 sm:grid-cols-2 items-center mt-5 gap-10'>
                    <div className='text-center group duration-300 h-[100%]'>
                        <div className='w-20 h-20 m-auto group-hover:scale-125 duration-300 transition-all'>
                            <img src={savetime} className='' alt='Save Time' />
                        </div>
                        <h3 className='font-semibold font-urbanist text-xl mb-3'>Saves Time</h3>
                        <p className='text-sm'>Automate routine tasks like lead replies, reporting and reminders.</p>
                    </div>
                    <div className='text-center group duration-300 h-[100%]'>
                        <div className='w-20 h-20 m-auto group-hover:scale-125 duration-300 transition-all'>
                            <img src={watercost} className='' alt='Water Cost' />
                        </div>
                        <h3 className='font-semibold font-urbanist text-xl mb-3'>Cut Costs</h3>
                        <p className='text-sm'>Automate routine tasks like lead replies, reporting and reminders.</p>
                    </div>
                    <div className='text-center group duration-300 h-[100%]'>
                        <div className='w-20 h-20 m-auto group-hover:scale-125 duration-300 transition-all'>
                            <img src={accuracy} className='' alt='Accuracy' />
                        </div>
                        <h3 className='font-semibold font-urbanist text-xl mb-3'>More Accuracy</h3>
                        <p className='text-sm'>Automate routine tasks like lead replies, reporting and reminders.</p>
                    </div>
                    <div className='text-center group duration-300 h-[100%]'>
                        <div className='w-20 h-20 m-auto group-hover:scale-125 duration-300 transition-all'>
                            <img src={available} className='' alt='Available 24/7' />
                        </div>
                        <h3 className='font-semibold font-urbanist text-xl mb-3'>Available 24x7</h3>
                        <p className='text-sm'>Automate routine tasks like lead replies, reporting and reminders.</p>
                    </div>
                    <div className='text-center group duration-300 h-[100%]'>
                        <div className='w-20 h-20 m-auto group-hover:scale-125 duration-300 transition-all'>
                            <img src={growth} className='' alt='Growth' />
                        </div>
                        <h3 className='font-semibold font-urbanist text-xl mb-3'>Growth</h3>
                        <p className='text-sm'>Automate routine tasks like lead replies, reporting and reminders.</p>
                    </div>
                </div>
            </section>

            {/*why us section */}
            <Whyus/>


            {/*your business */}
            <Yourbusiness/>

            {/*our process */}
            <Ourprocess/>
        </div>
    )
}
