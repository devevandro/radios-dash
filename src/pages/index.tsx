import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Login from '@/components/login'
import { useState } from 'react'
import Dashboard from '@/components/home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [haveAccount, setHaveAccount] = useState<boolean>(true);

  return (
    <>
      <Head>
        <title>Gerenciar Rádios</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {haveAccount ? <Dashboard /> : <Login />}
      </main>
    </>
  )
}
