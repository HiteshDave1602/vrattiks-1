import React from 'react'
import foundations from '../../../assests/img/feature/foundations.webp'
import aiwithsoul from '../../../assests/img/feature/ai-with-soul.webp'
import systemsthatcy from '../../../assests/img/feature/systems_that-cy.webp'
import builtbyfounders from '../../../assests/img/feature//builtbyfounders.webp'
import inspiredbynature from '../../../assests/img/feature/inspiredbynature.webp'
import foundationsgrey from '../../../assests/img/feature/foundations-grey.webp'
import aiwithsoulgrey from '../../../assests/img/feature/ai-with-soul-grey.webp'
import systemsthatcygrey from '../../../assests/img/feature/systems_that-cy-grey.webp'
import builtbyfoundersgrey from '../../../assests/img/feature//builtbyfounders-grey.webp'
import inspiredbynaturegrey from '../../../assests/img/feature/inspiredbynature-grey.webp'

export default function Why_us() {
    return (
        <section className='md:pt-28 pt-12'>
            <div className='container lg:px-28 px-7 m-auto text-center text-white'>
                <h2 className='text-center font-urbanist lg:text-5xl text-4xl mb-6 font-medium'>Why Us?</h2>
                <p className='text-xl max-w-4xl m-auto'>We're not just tech experts, we're problem-solvers who bring clarity, speed,
                    and intelligence to the heart of your business.</p>

                <div className='grid xl:grid-cols-5 grid-cols-1 sm:grid-cols-2 items-center mt-12 md:gap-10 gap-3'>
                    <div className='text-center bg-[#0e0e15] rounded-xl p-6 h-[100%] hover:bg-[#6942f1] group duration-300'>
                        <div className='w-20 h-20 m-auto relative'>
                            <img src={foundationsgrey} className='absolute group-hover:opacity-0' alt='Foundations That Scale' />
                            <img src={foundations} className='opacity-0 absolute group-hover:opacity-100' alt='Foundations That Scale' />

                        </div>
                        <h3 className='font-semibold font-urbanist text-xl mb-3'>Foundations That Scale</h3>
                        <p className='text-sm font-ibm'>Build once with you, not for break-fix.</p>
                    </div>
                    <div className='text-center bg-[#0e0e15] rounded-xl p-6 h-[100%] hover:bg-[#6942f1] group duration-300'>
                        <div className='w-20 h-20 m-auto relative'>
                            <img src={aiwithsoulgrey} className='absolute group-hover:opacity-0' alt='AI With Soul' />
                            <img src={aiwithsoul} className='opacity-0 absolute group-hover:opacity-100' alt='AI With Soul' />
                        </div>
                        <h3 className='font-semibold font-urbanist text-xl mb-3'>AI With Soul</h3>
                        <p className='text-sm font-ibm'>Not just bots, but intelligent systems that adapt.</p>
                    </div>
                    <div className='text-center bg-[#0e0e15] rounded-xl p-6 h-[100%] hover:bg-[#6942f1] group duration-300'>
                        <div className='w-20 h-20 m-auto relative'>
                            <img src={systemsthatcygrey} className='absolute group-hover:opacity-0' alt='Systems that Speak' />
                            <img src={systemsthatcy} className='opacity-0 absolute group-hover:opacity-100' alt='Systems that Speak' />

                        </div>
                        <h3 className='font-semibold font-urbanist text-xl mb-3'>Systems that Speak</h3>
                        <p className='text-sm font-ibm'>We connect your tools into one creative brain.</p>
                    </div>
                    <div className='text-center bg-[#0e0e15] rounded-xl p-6 h-[100%] hover:bg-[#6942f1] group duration-300'>
                        <div className='w-20 h-20 m-auto relative'>
                            <img src={builtbyfoundersgrey} className='absolute group-hover:opacity-0' alt='Built by Founders' />
                            <img src={builtbyfounders} className='opacity-0 absolute group-hover:opacity-100' alt='Built by Founders' />
                        </div>
                        <h3 className='font-semibold font-urbanist text-xl mb-3'>Built by Founders, Not Agencies</h3>
                        <p className='text-sm font-ibm'>We're builders — not just vendors.</p>
                    </div>
                    <div className='text-center bg-[#0e0e15] rounded-xl p-6 h-[100%] hover:bg-[#6942f1] group duration-300'>
                        <div className='w-20 h-20 m-auto relative'>
                            <img src={inspiredbynaturegrey} className='absolute group-hover:opacity-0' alt='Inspired by Nature' />
                            <img src={inspiredbynature} className='opacity-0 absolute group-hover:opacity-100' alt='Inspired by Nature' />
                        </div>
                        <h3 className='font-semibold font-urbanist text-xl mb-3'>Inspired by Nature. Built with AI</h3>
                        <p className='text-sm font-ibm'>Smart systems. Natural flow. Real growth.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
