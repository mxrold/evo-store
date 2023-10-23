import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  return (
    <main>
      <Navbar />
      <h1>Avo Store</h1>
    </main>
  )
}
