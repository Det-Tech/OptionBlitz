import React from 'react'
import styled from 'styled-components'
import Affiliates from './Affiliates'
import Animation from './Animation'
import AnimationHead from './AnimationHead'
import APY from './APY'
import BLX from './BLX'
import BodyDetail from './BodyDetail'
import DAO from './DAO'
import DigitalO2 from './DigitalO2'
import DigitalOption from './DigitalOption'
import Fees from './Fees'
import Head from './Head'
import ImageSlider from './ImageSlider'
import Markets from './Markets'
import MarketsHead from './MarketsHead'
import Profile from './Profile'
import Staking from './Staking'
import TokenSale from './TokenSale'
import TradingProducts from './TradingProducts'
import TurboPage from './TurboPage'
import BLXq from './BLXq'
import Chart from './Chart'
import Uniswap from './Uniswap'
import RoadMap from './RoadMap'
import FAQ from './FAQ'
import Footer from './Footer'
function Home() {
    return (
        <Container>
            <Head />
            <BodyDetail />
            <ImageSlider />
            <Profile />
            <AnimationHead />
            <Animation />
            <TurboPage />
            <Fees />
            <Markets />
            <TradingProducts />
            <DigitalOption />
            <DigitalO2 />
            <MarketsHead />
            <Affiliates />
            <Staking />
            <APY />
            <TokenSale />
            <BLX />
            <DAO />
            <BLXq />
            <Chart />
            <Uniswap />
            <RoadMap />
            <FAQ />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  background: #101218;

`
export default Home
