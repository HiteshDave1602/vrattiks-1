import React from 'react'
import automatedleadmanagement from '../../../assests/img/feature/automated-lead-management.webp'
import simplifieddailyoperations from '../../../assests/img/feature/simplified-daily-operations.webp'
import smartbusinessdashboards from '../../../assests/img/feature/smart-business-dashboards.webp'
import customaisolutions from '../../../assests/img/feature/custom-ai-solutions.webp'

export default function Yourbusiness() {
    return (
        <section className='md:pt-28 pt-12'>
            <div className='container lg:px-28 px-7 m-auto text-white'>
                <div className='text-center'>

                    <h2 className='text-center font-urbanist lg:text-5xl text-4xl mb-6 font-medium'>What We Can Do for
                        <span className='text-[#b79af3]'> Your Business</span> </h2>
                    <p className='text-xl max-w-4xl m-auto'>Smart systems that save time, reduce chaos,
                        and help you grow faster.</p>
                </div>


                <div className='grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-5 mt-14 text-left'>
                    <div className='cursor-pointer group relative transition-all duration-700'>
                        <div className='relative overflow-hidden transform-gpu group-hover:scale-y-75
                             group-hover:shadow-purple-500/30 rounded-xl origin-top duration-700 transition-all group-hover:shadow-2xl'>
                            <img src={automatedleadmanagement} className='object-cover w-full h-full' alt="" />
                        </div>
                        <h3 className='font-bold font-urbanist text-xl mt-4 transition-all duration-700 relative z-30 group-hover:mt-8'>Automated Lead Management</h3>
                        <p className='text-sm opacity-0 group-hover:opacity-100 transition-all duration-700 transform 
                        translate-y-2 group-hover:translate-y-0 relative z-30'>We set up AI-enhanced CRM systems that capture leads automatically, send personalized outreach sequences,
                            and provide instant response tools that work 24/7 — so you never miss an opportunity while focusing on
                            closing deals.</p>
                    </div>
                    <div className='cursor-pointer'>
                        <img src={simplifieddailyoperations} className='rounded-xl' alt="" />
                        <h3 className='font-bold font-urbanist text-xl my-3'>Simplified Daily Operations</h3>
                        <p className='text-sm hidden'>From scheduling and task flow automation to smart reminders and deadline tracking, we streamline
                            your daily operations so your team can focus on high-value work instead of repetitive tasks.</p>
                    </div>
                    <div className='cursor-pointer'>
                        <img src={smartbusinessdashboards} className='rounded-xl' alt="" />
                        <h3 className='font-bold font-urbanist text-xl my-3'>Smart Business Dashboards</h3>
                        <p className='text-sm hidden'>Get real-time visibility into your business with custom dashboards that track KPIs,
                            identify trends, and send intelligent alerts — helping you make data-driven decisions faster than ever.</p>
                    </div>
                    <div className='cursor-pointer'>
                        <img src={customaisolutions} className='rounded-xl' alt="" />
                        <h3 className='font-bold font-urbanist text-xl my-3'>Custom AI Solutions for Your Business</h3>
                        <p className='text-sm hidden'>Every business is unique. We create tailor-made AI solutions that plug directly into your
                            existing systems, whether it's automating customer service, optimizing inventory, or predictive analytics for growth.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
