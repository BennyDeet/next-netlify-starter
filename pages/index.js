import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Role Tube</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://apis.google.com/js/platform.js" async defer></script>
      </Head>

      <main>
        <Header title="Hello Motherffucka!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
