import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Whysmartbuisness from './sections/Whysmartbuisness'
import Cofounders from './sections/Cofounders'
import Businessfastgrow from './sections/Businessfastgrow'
import Footer from '../../components/Footer'
import IntroductionSpeech from '../../components/IntroductionSpeech'

export default function Home() {
  return (
    <div>
        <Header/>
        <Banner />
        <Whysmartbuisness/>
        <Cofounders/>
        <Businessfastgrow/>
        <Footer/>
    </div>
  )
}
