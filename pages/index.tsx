import type {NextPage} from 'next'
import Head from 'next/head'
import Hero from "../components/hero";
import SectionButtons from "../components/section-buttons";
import SectionInfoBoard from "../components/section-infoboard";
import SectionDetail from "../components/section-detail";
import SectionCards from "../components/section-cards";
import SectionUniswap from "../components/section-uniswap";
import SectionHowToBuy from "../components/section-howtobuy";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>DOGEFUN</title>
                <meta name="description" content="Crypto site"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Hero/>
            <SectionButtons/>
            <SectionInfoBoard/>
            <SectionDetail/>
            {/*<SectionCalculator/>*/}
            <SectionCards/>
            <SectionUniswap/>
            <SectionHowToBuy/>
        </>
    )
}

export default Home
