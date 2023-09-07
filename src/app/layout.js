
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <Header />
          {children}
        </Providers>

      </body>
    </html>
  )
}
