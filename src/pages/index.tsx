import Head from 'next/head'
import { LandingPage } from '@/components/LandingPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Car Lite LB</title>
        <meta name="description" content="Advocacy toward a safe, vibrant future" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <LandingPage />
    </>
  )
}
