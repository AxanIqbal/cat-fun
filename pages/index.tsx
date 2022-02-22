import type {NextPage} from 'next'
import Head from 'next/head'
import Hero from "../components/hero";
import SectionButtons from "../components/section-buttons";
import SectionInfoBoard from "../components/section-infoboard";


const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Dodge Fun</title>
                <meta name="description" content="Crypto site"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Hero/>
            <SectionButtons/>
            <SectionInfoBoard/>
        </>
    )
}

export default Home
