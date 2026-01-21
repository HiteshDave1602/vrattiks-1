import React from 'react'
import vision from '../../../assests/img/feature/vision.webp'
import mission from '../../../assests/img/feature/mission.webp'

export default function Visionmission() {
    return (
        <section className='py-12'>
            <div className='container lg:px-28 px-7 m-auto'>
                <div className='grid md:grid-cols-2 md:gap-10 gap-8 text-left text-white'>
                    <div className='bg-[#1a1a22] p-5 rounded-2xl hover:scale-[1.02] duration-300'>
                        <div className='mb-5'>
                            <img src={vision} alt="Vision" className='w-20 h-20'/>
                        </div>
                        <h3 className='font-semibold font-urbanist text-xl mb-3'>Vision</h3>
                        <p>To create a world where every business operates in flow, powered by intelligence, 
                            inspired by nature, and free from chaos.</p>
                    </div>
                    <div className='bg-[#1a1a22] p-5 rounded-2xl hover:scale-[1.02] duration-300'>
                        <div className='mb-5'>
                            <img src={mission} alt="Vision" className='w-20 h-20'/>
                        </div>
                        <h3 className='font-semibold font-urbanist text-xl mb-3'>Mission</h3>
                        <p>Our mission is to simplify growth for businesses by building custom AI systems that 
                            automate tasks, connect tools, and bring clarity to everyday operations.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
