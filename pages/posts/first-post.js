import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FistPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Fisrt Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}