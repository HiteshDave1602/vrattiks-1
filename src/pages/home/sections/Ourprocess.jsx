import React from 'react'
import ourprocess1 from '../../../assests/img/feature/our-process-1.webp'
import ourprocess2 from '../../../assests/img/feature/our-process-2.webp'
import ourprocess3 from '../../../assests/img/feature/our-process-3.webp'
import ourprocess4 from '../../../assests/img/feature/our-process-4.webp'
import ourprocess5 from '../../../assests/img/feature/our-process-5.webp'

export default function Our_process() {
    return (
        <section className='md:pt-28 pt-12'>
            <div className='container lg:px-28 px-7 m-auto text-center text-white'>
                <h2 className='text-center font-urbanist lg:text-5xl text-4xl mb-6 font-medium'>Our Process</h2>
                <p className='text-xl '>How we deliver the best services</p>


                <div className='grid xl:grid-cols-5 grid-cols-1 sm:grid-cols-2 items-center mt-5 gap-10'>
                    <div className='text-center'>
                        <img src={ourprocess1} className='w-20 h-20 m-auto' alt="" />
                        <h3 className='font-semibold font-urbanist text-xl my-3'>Discover</h3>
                        <p className='text-sm'>We understand your business deeply</p>
                    </div>
                    <div className='text-center'>
                        <img src={ourprocess2} className='w-20 h-20 m-auto' alt="" />
                        <h3 className='font-semibold font-urbanist text-xl my-3'>Build</h3>
                        <p className='text-sm'>Map out your automation architecture</p>
                    </div>
                    <div className='text-center'>
                        <img src={ourprocess3} className='w-20 h-20 m-auto' alt="" />
                        <h3 className='font-semibold font-urbanist text-xl my-3'>Test</h3>
                        <p className='text-sm'>Ensure quality with rigorous testing</p>
                    </div>
                    <div className='text-center'>
                        <img src={ourprocess4} className='w-20 h-20 m-auto' alt="" />
                        <h3 className='font-semibold font-urbanist text-xl my-3'>Deploy</h3>
                        <p className='text-sm'>Build fast using AI + Low-code Tools</p>
                    </div>
                    <div className='text-center'>
                        <img src={ourprocess5} className='w-20 h-20 m-auto' alt="" />
                        <h3 className='font-semibold font-urbanist text-xl my-3'>Evolve</h3>
                        <p className='text-sm'>Continuous improvement & innovation</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
