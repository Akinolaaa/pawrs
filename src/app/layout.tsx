import type { Metadata } from 'next';
import NavBar from '@/app/components/NavBar';
import { Outfit } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pawrs',
  description: 'your favorite pet platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-white text-darkBlue max-w-min`}>
        <p className='text-center text-black1 text-sm py-1 bg-nude'> 
          Free Veterinary Checkup for the first 4 months! 
        </p>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
