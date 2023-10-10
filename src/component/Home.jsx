import React from 'react'
import Loader from './fragments/Loader'
import Header from './fragments/Header'
import Footer from './fragments/Footer'
import HeroSection from './fragments/HeroSection'
import ServiceSection from './fragments/ServiceSection'
import SkillsSection from './fragments/SkillsSection'
import PortfolioSection from './fragments/PortfolioSection'
import BlogSection from './fragments/BlogSection'

function Home() {
  return (
    <div>
      <Loader/>
      <Header/>
      <main> 
        <article>
            <HeroSection/>
            <ServiceSection/>
            <SkillsSection/>
            <PortfolioSection/>
            <BlogSection/>
        </article>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
