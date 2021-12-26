import Head from 'next/head'
import Featured from '../components/Featured'
import PizzList from '../components/PizzList'


import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Garden - Tetove</title>
        <meta name="description" content="Best Pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Featured />
     <PizzList />
    </div>
  )
}
