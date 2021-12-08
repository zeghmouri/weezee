import Head from 'next/head'
import Header from '../src/components/header'
import Version from '../src/components/version'
import Concept from '../src/components/concept'
import AppCard from '../src/components/appCard'
import WeezeeMap from '../src/components/weezeeMap'
import Tarifs from '../src/components/tarifs'
import Newsletter from '../src/components/newsletter'
import Footer from '../src/components/footer'
import previewImage from '../public/preview.jpg'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Weezee - WiFi illimité à l&apos;extérieur, à prix cassé !</title>
        <meta name="description" content="Depuis 2014, notre mission est la même : vous connecter facilement aux réseaux WiFis proche de vous grâce à une application complète et novatrice."/>
        <link rel="icon" href="/weezee.svg" />
        <meta property="og:image" content={previewImage.src} key="ogimage" />
        <meta property="og:site_name" content="Weezee" key="ogsitename" />
        <meta property="og:title" content="Weezee - WiFi illimité à l&apos;extérieur, à prix cassé !" key="ogtitle" />
        <meta property="og:description" content="Depuis 2014, notre mission est la même : vous connecter facilement aux réseaux WiFis proche de vous grâce à une application complète et novatrice." key="ogdesc" />
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
