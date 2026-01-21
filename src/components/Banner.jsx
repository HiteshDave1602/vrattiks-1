import React, { useState } from 'react'
import myvideo from '../assests/img/video/Home-DvG1jUY9.webm'
import { IoMdClose } from 'react-icons/io';

export default function Banner() {
    const [menuopen, setMenuopen] = useState(false);

    return (
        <>
            <div className='xl:py-20 py-20 md:py-24'>
                <div className='container md:px-20 px-7'>
                    <div className='lg:flex items-center'>
                        <div >
                            <h1 className='text-white md:text-6xl text-4xl lg:text-left text-center mb-5 max-w-3xl font-urbanist'>We build
                                <span className='text-[#b79af3]'>AI-System </span> that <span className='text-[#b79af3]'>Save</span>
                                time, <span className='text-[#b79af3]'>Reduce</span> work and <span className='text-[#b79af3]'>Grow</span> your business.
                            </h1>
                            <p className='text-white text-lg lg:text-left text-center mb-5 max-w-2xl'>We connect your tools,
                                automate your processes, and add intelligent decision-making with AI so your business
                                runs faster, smoother, and smarter.
                            </p>
                            <div className='lg:text-left text-center'>
                                <button onClick={() => setMenuopen(true)} className='text-left bg-[#7f36ec] text-white px-7 py-1 rounded-md font-urbanist'>Talk to an AI Expert</button>
                            </div>
                        </div>
                        <div className='max-w-xl'>
                            <video src={myvideo} loop autoPlay playsinline></video>
                        </div>
                    </div>
                </div>
            </div>

            {menuopen && (
                <div onClick={() => setMenuopen(false)} className='fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0'>
                    <div onClick={(e) => e.stopPropagation()} className='bg-[#070a13] p-5 relative'>
                        <div className='text-center text-white mb-4'>
                            <h2 className='text-2xl font-semibold mb-3'>Talk to AI Expert</h2>
                            <p>Fill in your details and we'll get back to you shortly</p>
                        </div>

                        <form>
                            <label className='block text-sm font-sf font-medium text-foreground mb-2 text-white'>Name</label>
                            <input type="text" placeholder='Enter Your Full Name' className='mb-6 w-full bg-[#070a13] p-3 rounded-md border border-gray-800 
                            focus:border-[#b79af3]' name='name' />
                            <label className='block text-sm font-sf font-medium text-foreground mb-2 text-white'>Mobile Number</label>
                            <input type="email" placeholder='Enter Your Mobile Number' className='mb-6 w-full bg-[#070a13] p-3 rounded-md border border-gray-800 
                            focus:border-[#b79af3]' name='email' />

                            <div className='flex gap-3 mt-4'>
                                <button onClick={() => setMenuopen(false)} class="hover:bg-[#1d2839] text-center py-2 px-4 border border-white/20 text-white rounded-md font-urbanist w-full">
                                    Cancel</button>
                                <button class="text-center py-2 px-4 bg-[#5e48e8] text-white rounded-md font-urbanist w-full">
                                    Submit Request</button>
                            </div>
                        </form>

                        <div className='absolute top-2 right-2 cursor-pointer'>
                            <IoMdClose className='text-white' onClick={() => setMenuopen(false)} size={30} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
