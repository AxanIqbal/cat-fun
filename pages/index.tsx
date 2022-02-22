import type {NextPage} from 'next'
import Head from 'next/head'
import Hero from "../components/hero";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Dodge Fun</title>
                <meta name="description" content="Crypto site"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Hero/>
        </>
    )
}

export default Home
