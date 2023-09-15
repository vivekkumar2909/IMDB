import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className=' bg-teal-300 rounded-t-3xl'>
      <div className='  flex justify-center gap-4 p-20 mt-10 text-2xl  static bottom-0 hover:shadow-md dark:text-white dark:bg-slate-700 font-serif  font-bold'> 
      <Link href={'/'}>
      <div className=' hover:text-amber-600'>Home</div>
      </Link>
      <Link href={'about'}><div className=' hover:text-amber-600'>About</div></Link>
      <div className=' hover:text-amber-600'>Telegram</div>
      <div className=' hover:text-amber-600'>Privacy Policy</div>
      </div>
    </div>
  )
}

