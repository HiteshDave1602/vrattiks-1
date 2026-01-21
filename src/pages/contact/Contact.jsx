import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FiMessageSquare, FiPhone } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <div>
      {/*header part*/}
      <Header />

      <div className='bg-[#121118] xl:py-32 py-20 md:py-24'>
        <div className='container md:px-20 px-7 m-auto'>
          <div className='text-center'>
            <h2 className='text-white md:text-5xl text-4xl font-bold mb-8 max-w-3xl font-urbanist m-auto'>
              Start with a Conversation.
              End with a Smarter <span className='text-[#b79af3]'>Business</span>
            </h2>
          </div>

          <div className='grid lg:grid-cols-2 gap-16'>
            <div className='border border-white/20 rounded-xl p-8 bg-[#111117]'>
              <form>
                <input type="text" placeholder='name' className='mb-6 w-full bg-[#070a13] p-3 rounded-md border border-gray-800 
                    focus:border-[#b79af3]' name='name' />
                <input type="email" placeholder='Email' className='mb-6 w-full bg-[#070a13] p-3 rounded-md border border-gray-800 
                    focus:border-[#b79af3]' name='email' />
                <input type="text" placeholder='Contact Number' className='mb-6 w-full bg-[#070a13] p-3 rounded-md border border-gray-800 
                    focus:border-[#b79af3]' name='text' />
                <textarea type="text" name='text' placeholder='What you want to automate or improve?' className='mb-6 w-full bg-[#070a13] p-3 rounded-md border 
                    border-gray-800 h-32'></textarea>
                <button class="text-center py-2 px-4 bg-[#7f36ec] text-white rounded-md font-urbanist w-full">
                  Unlock My Business Intelligencet</button>
              </form>
            </div>
            <div className=''>
              <div className='mb-7 border border-white/20 rounded-xl p-8 bg-[#111117] text-white hover:border-[#3d206d]'>
                <div className="flex items-start">
                  <div className='w-12 h-12 rounded-lg bg-[#1c152e] flex items-center justify-center'>
                    <FiPhone className='text-[#7f36eb] text-xl w-6 h-6' />
                  </div>
                  <div className='ml-4'>
                    <h3 className='font-semibold mb-2 text-lg'>Phone</h3>
                    <p className='text-[#9e9fa3] text-sm mb-3'>Call us to discuss your requirements</p>
                    <p><a href='tel:+91 91066 80019'>+91 91066 80019</a></p>
                  </div>
                </div>
              </div>

              <div className='mb-7 border border-white/20 rounded-xl p-8 bg-[#111117] text-white hover:border-[#185934]'>
                <div className="flex items-start">
                  <div className='w-12 h-12 rounded-lg bg-[#122420] flex items-center justify-center'>
                    <FiMessageSquare className='text-[#1fa953] text-xl w-6 h-6' />
                  </div>
                  <div className='ml-4'>
                    <h3 className='font-semibold mb-2 text-lg'>WhatsApp</h3>
                    <p className='text-[#9e9fa3] text-sm mb-3'>Send us a message on WhatsApp</p>
                    <button className='text-left text-[#1fa953] border border-[#1fa953] px-3 py-2 rounded-md font-urbanist text-sm font-medium'>Send us 'Hello'</button>
                  </div>
                </div>
              </div>

              <div className='border border-white/20 rounded-xl p-8 bg-[#111117] text-white hover:border-[#223e70]'>
                <div className="flex items-start">
                  <div className='w-12 h-12 rounded-lg bg-[#122420] flex items-center justify-center'>
                    <FaRegEnvelope className='text-[#2f61b5] text-xl w-6 h-6' />
                  </div>
                  <div className='ml-4'>
                    <h3 className='font-semibold mb-2 text-lg'>Email</h3>
                    <p className='text-[#9e9fa3] text-sm mb-3'>Our team will get back to you</p>
                    <p><a href='mailto:vrattiks@gmail.com'>vrattiks@gmail.com</a></p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/*footer part*/}
      <Footer />
    </div>
  )
}
