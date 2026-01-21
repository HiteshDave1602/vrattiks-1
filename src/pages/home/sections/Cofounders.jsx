import React from 'react'
import arpitpatel from '../../../assests/img/feature/arpit-patel.webp'
import hiteshdave from '../../../assests/img/feature/hitesh-dave.webp'

export default function Co_founders() {
  return (
    <section className='py-12'>
      <div className='container lg:px-32 px-7 text-white m-auto'>
        <div className='lg:flex items-center gap-10 text-center'>
          <div className=''>
            <div className='w-40'>
              <img src={arpitpatel} alt="" />
            </div>
            <h3 className='font-medium'>Arpit Patel</h3>
            <p>Co founder</p>
          </div>
          <div className='mx-12'>
            <h2 className='text-center font-urbanist lg:text-5xl text-4xl mb-5 font-medium'>Co-Founders Note</h2>
            <p className='text-sm text-white-700'>At Vrattiks, we believe intelligence is the true center of the universe.
              When combined with clarity, action, and flow, it makes business unstoppable.
              Inspired by the timeless systems and philosophies of Ancient India, we bring that depth into the modern world through AI,
              automation, and adaptive technology.</p>
            <p className='text-sm'>Vrattiks isn't just another tech company — it's a growth engine for businesses ready to simplify,
              scale, and evolve without chaos. Where others get stuck in repetitive tasks and disjointed tools, we deliver</p>
            <p className='text-sm'>intelligent systems that think, connect, and act.</p>
            <p className='text-sm'>When ancient wisdom meets modern intelligence, your business moves in flow. That's the Vrattiks way.</p>
          </div>
          <div className=''>
            <div className='w-40'>
              <img src={hiteshdave} alt="" />
            </div>
            <h3 className='font-medium'>Hitesh Dave</h3>
            <p>Co founder</p>
          </div>
        </div>
      </div>
    </section>
  )
}
