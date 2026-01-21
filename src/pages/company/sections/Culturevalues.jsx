import React from 'react'
import truststability from '../../../assests/img/feature/trust-stability.webp'
import flexibility from '../../../assests/img/feature/flexibility-flow.webp'
import actionpurpose from '../../../assests/img/feature/action-with-purpose.webp'
import transparency from '../../../assests/img/feature/transparency.webp'
import infinitecuriosity from '../../../assests/img/feature/infinite-curiosity.webp'

export default function Culturevalues() {
    return (
        <section className='md:pt-32 pt-12'>
            <h2 className='text-center font-urbanist lg:text-5xl text-4xl mb-12 text-white'>Culture & Values</h2>

            <div className='container lg:px-28 px-7 m-auto'>

                <div className='grid md:grid-cols-2 gap-8 items-center text-white text-center lg:grid-cols-3 xl:grid-cols-5'>
                    <div className='bg-[#1e1e27] p-6 rounded-xl h-[100%]'>
                        <div className='w-24 h-24 m-auto bg-[#1d2839] rounded-lg flex items-center justify-center mb-3'>
                            <img src={truststability} alt='Trust & Stability' className='w-14 h-14' />
                        </div>
                        <h3 className='font-semibold font-urbanist text-xl mb-3'>Trust & Stability</h3>
                        <p className='text-sm'>We build systems you can rely on</p>
                    </div>

                    <div className='bg-[#1e1e27] p-6 rounded-xl h-[100%]'>
                        <div className='w-24 h-24 m-auto bg-[#1d2839] rounded-lg flex items-center justify-center mb-3'>
                            <img src={flexibility} alt='Trust & Stability' className='w-14 h-14' />
                        </div>
                        <h3 className='font-semibold font-urbanist text-xl mb-3'>Flexibility & Flow</h3>
                        <p className='text-sm'>We adapt like water to your needs</p>
                    </div>

                    <div className='bg-[#1e1e27] p-6 rounded-xl h-[100%]'>
                        <div className='w-24 h-24 m-auto bg-[#1d2839] rounded-lg flex items-center justify-center mb-3'>
                            <img src={actionpurpose} alt='Trust & Stability' className='w-14 h-14' />
                        </div>
                        <h3 className='font-semibold font-urbanist text-xl mb-3'>Action with Purpose</h3>
                        <p className='text-sm'>Speed, clarity, and smart execution</p>
                    </div>

                    <div className='bg-[#1e1e27] p-6 rounded-xl h-[100%]'>
                        <div className='w-24 h-24 m-auto bg-[#1d2839] rounded-lg flex items-center justify-center mb-3'>
                            <img src={transparency} alt='Trust & Stability' className='w-14 h-14' />
                        </div>
                        <h3 className='font-semibold font-urbanist text-xl mb-3'>Transparency</h3>
                        <p className='text-sm'>Open, honest, and clear</p>
                    </div>

                    <div className='bg-[#1e1e27] p-6 rounded-xl h-[100%]'>
                        <div className='w-24 h-24 m-auto bg-[#1d2839] rounded-lg flex items-center justify-center mb-3'>
                            <img src={infinitecuriosity} alt='Trust & Stability' className='w-14 h-14' />
                        </div>
                        <h3 className='font-semibold font-urbanist text-xl mb-3'>Infinite Curiosity</h3>
                        <p className='text-sm'>We explore beyond limits</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
