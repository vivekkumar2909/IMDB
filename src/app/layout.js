
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import Navbar from './components/Navbar'
import Footer from '@/app/footer/Footer'
import SearchBox from './components/SearchBox'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <Header />
          {/* NavBar */}
          <Navbar/>




          {/* SearchBox */}
          <SearchBox/>

          
          {children}

          


          {/* Footer section */}
          <Footer/>
        </Providers>

      </body>
      
    </html>
  )
}
