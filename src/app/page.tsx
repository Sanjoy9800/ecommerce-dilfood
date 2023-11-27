import Image from 'next/image'
import Herosec from '../components/Herosec'
import Feature from '@/components/Feature'
import Newpro from '@/components/Newpro'
import Category from '@/components/Category'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
     <Herosec/>
     <Feature/>
     <Newpro/>
     <Category/>
     <Footer/>
    </main>
  )
}
