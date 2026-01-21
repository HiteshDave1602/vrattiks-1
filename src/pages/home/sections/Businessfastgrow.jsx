import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';

export default function Businessfastgrow() {
    const [open, setOpen] = useState(false);

    return (
        <>
        <section className='md:py-16 py-8 bg-[#0c0f1a] text-center'>
            <div className='container lg:px-32 px-7 text-white m-auto'>
                <h2 className='font-urbanist lg:text-5xl text-4xl mb-8'>
                    <span className='text-[#b79af3]'> Businesses </span> that act fast grow faster. <br />
                    Will yours?
                </h2>
                <p className='text-xl max-w-4xl m-auto mb-7'>Every successful brand starts with the right strategy.
                    Let’s discuss how we can take your business to the next level.</p>
                <button onClick={() => setOpen(true)} className='text-left bg-[#7f36ec] text-white px-7 py-1 rounded-md font-urbanist'>
                    Book a Free Call Now</button>

            </div>
        </section>

          {open && (
                        <div onClick={() => setOpen(false)} className='fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0'>
                            <div onClick={(e) => e.stopPropagation()} className='bg-[#070a13] p-5 relative'>
                                <div className='text-center text-white mb-4'>
                                    <h2 className='text-2xl font-semibold mb-3'>Book a Free Call</h2>
                                    <p>Fill in your details and we'll get back to you shortly</p>
                                </div>
        
                                <form>
                                    <label className='block text-sm font-sf font-medium text-foreground mb-2 text-white'>Name</label>
                                    <input type="text" placeholder='Enter Your Name' className='mb-6 w-full bg-[#070a13] p-3 rounded-md border border-gray-800 
                            focus:border-[#b79af3]' name='name' />
                                    <label className='block text-sm font-sf font-medium text-foreground mb-2 text-white'>Mobile Number</label>
                                    <input type="email" placeholder='Enter Your Mobile Number' className='mb-6 w-full bg-[#070a13] p-3 rounded-md border border-gray-800 
                            focus:border-[#b79af3]' name='email' />
        
                                    <div className='flex gap-3 mt-4'>
                                        <button onClick={() => setOpen(false)} class="hover:bg-[#1d2839] text-center py-2 px-4 border border-white/20 text-white rounded-md font-urbanist w-full">
                                            Cancel</button>
                                        <button class="text-center py-2 px-4 bg-[#5e48e8] text-white rounded-md font-urbanist w-full">
                                            Submit Request</button>
                                    </div>
                                </form>
        
                                <div className='absolute top-2 right-2 cursor-pointer'>
                                    <IoMdClose className='text-white' onClick={() => setOpen(false)} size={30} />
                                </div>
                            </div>
                        </div>
                    )}
                    </>
    )
}
