import React from 'react'
// import Hero from '../components/Hero'
// import LatestCollection from '../components/LatestCollection'
// import BestSeller from '../components/BestSeller'
import Landing from '../components/Landing'
import Clients from '../components/Clients'
import Details from '../components/Details'
import About from '../components/About'
import Review from '../components/Review'
import How from '../components/How'
import Subscribe from '../components/Subscribe'
import OurPolicy from '../components/OurPolicy'
// import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Landing/>
      <Clients/>
      <About/>
      <Details/>
       <How/>
      <Review/>
      <OurPolicy/>
      <Subscribe/>
      {/* <Hero/> */}
      {/* <LatestCollection/> */}
      {/* <BestSeller/> */}
      {/* <NewsLetterBox/> */}
    </div>
  )
}

export default Home
