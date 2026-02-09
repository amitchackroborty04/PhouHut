import ContactForm from '@/components/common/ContactForm'
import Available from '@/components/web/Available'
import { FaqSection } from '@/components/web/Faq'
import Hero from '@/components/web/Hero'
import Navbar from '@/components/web/Navbar'
import NewLounge from '@/components/web/NewLounge'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <NewLounge/>
      <Available/>
      <FaqSection/>
      <ContactForm/>
    </div>
  )
}

export default page