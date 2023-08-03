import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className='text-slate-800 w-full h-40 p-5 flex justify-start gap-10 bg-slate-100'>
        <div>PayNet</div>
        <nav className='grid text-slate-800'>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/user/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/user/payments">Payments</Link>
            </li>
            <li>
              <Link href="/user/">Something</Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default Footer