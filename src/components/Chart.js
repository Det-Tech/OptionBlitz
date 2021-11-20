import React from 'react'
import styled from 'styled-components'
function Chart() {
    return (
        <Container>
            <Wrap>
                <Head>
                    <p>The token sale for BLX will be done via an Initial Bonding Curve Offering (IBCO) with early participants having                       a significant discount compared to later ones.</p>
                    <div>
                        <img src="/images/chart2.png"/>
                    </div>
                    <p>The price (P) bonding curve above is based on the amount of tokens released (T) and is defined as follows:</p>
                    <h2>P=0.0015×T</h2>
                    <p>Filling the entire bonding curve (30 MM tokes sold) would be the equivalent of raising 10 MM USD.</p>
                    <p>Important: Under SEC rules, this token may constitute a hybrid utility/security contract and will not be offered to US unaccredited investors. When the IBCO ends US investors will be able to buy the token from Uniswap secondary market with no restrictions.</p>
                </Head>
                <Body>
                    <div>
                        <img src="/images/71.png"/>
                    </div>

                    <div>
                        <img src="/images/72.png"/>
                    </div>
                </Body>
                <Footer>
                    <div>
                        <img src="/images/chart2.png"/>
                    </div>
                </Footer>
            </Wrap>
            
        </Container>
    )
}
const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 50px;


@media only screen and (max-width: 600px) {
    margin-top: 50px;
}
`
const Wrap = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
overflow: hidden;
margin-top: 200px;

@media only screen and (max-width: 600px) {
    margin-top: 20px;
}
`

const Head = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
margin-top: 70px;

p{
    font-size: 20px;
line-height: 30px;
color: #CDD6F5;
margin-bottom: 40px;
}

div{
    width: 80%;
    margin-bottom: 40px;
    display: flex;
align-items: center;
justify-content: center;

    img{
        width: 100%;
    }
}

h2{
    font-size: 26px;
line-height: 29px;
color: #00CD86;
margin-bottom: 30px;
}
`

const Body = styled.div`
width: 100%;
display: flex;
margin-top: 90px;


@media only screen and (max-width: 600px) {
    flex-direction: column;
}

div{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    
@media only screen and (max-width: 600px) {
    width: 100%;
}

    img{
        width: 90%;
    }
}
`

const Footer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 90px;

div{
    width: 80%;

    img{
        width: 100%;
    }
}

`
export default Chart
