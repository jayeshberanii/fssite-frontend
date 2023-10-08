import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavbarLayout from '@/src/components/Navbar/NavbarLayout'
import HomePageLayout from '@/src/components/HomePage/HomePageLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavbarLayout />
      <HomePageLayout/>
    </>
  )
}
