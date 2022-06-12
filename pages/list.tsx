import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const List: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>리스트</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        LIST
      </main>
    </div>
  )
}

export default List
