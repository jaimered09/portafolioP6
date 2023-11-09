import {Providers} from "./providers";
import { NavbarNEXTUI } from '@/components/Navbar'
import { Roboto } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'P6next',
  description: 'Portafolio with Next.js, Bootcamp UDD',
  keywords: 'portafolio, briefcase, brands, udd, fullstack, bootcamp, nextJS',
  author: 'Jaime-Jaramillo'
}

const robotoFont = Roboto({
  weight: ['300', '400', '500', '700'],
  styles: ['normal', 'italic'],
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoFont.className}>
        <Providers>
          <NavbarNEXTUI />
          {children}
        </Providers>

      </body>
    </html>
  )
}