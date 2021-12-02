import Head from 'next/head'
import Header from '../src/components/header'
import Version from '../src/components/version'
import Concept from '../src/components/concept'
import AppCard from '../src/components/appCard'
import WeezeeMap from '../src/components/weezeeMap'
import Tarifs from '../src/components/tarifs'
import Newsletter from '../src/components/newsletter'
import Footer from '../src/components/footer'

export default function Home() {
  return (
    <div >
      <Head>
        <title>weezee</title>
        <link rel="icon" href="/weezee.svg" />
      </Head>
      <Header/>
      <Version/>
      <Concept/>
      <AppCard/>
      <WeezeeMap/>
      <Tarifs/>
      <Newsletter/>
      <Footer/>
      </div>

      
  )
}
