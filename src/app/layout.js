import Link from 'next/link'
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* Header */}
      <Header/>
      {children}</body>
    </html>
  )
}
