import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Card } from 'semantic-ui-react'

const List: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>리스트</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Card>
          test
        </Card>
      </main>
    </div>
  )
}

export default List
