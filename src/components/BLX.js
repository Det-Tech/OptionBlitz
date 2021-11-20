import React from 'react'
import styled from 'styled-components'
function BLX() {
    return (
        <Container>
            <Wrap>
                <Left>
                    <img src="/images/image56.png"/>
                </Left>
                <Right>
                    <h1>Why should I buy BLX?</h1>
                    <p>BLX holders enjoy huge benefits, they can stake it inconjunction with USDT as liquidity providers and supercharge their returns by up to +50% </p>
                    <p>You can use it to pay for trading fees and get a 25% discount.</p>
                    <p>You also get to participate in the governance of the Optionblitz DAO and earn a share of the DAO’s profits. </p>
                    <p>A condition encoded into the BLX token sale is the deployment of a Uniswap listing after successful fund raise, this means that there is a guaranteed secondary market available if investors want to exit and sell their BLX.</p>
                </Right>
            </Wrap>
        </Container>
    )
}
const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background: url("/images/Bg7.png");
background-size: cover;
background-repeat: no-repeat;
margin-top: 50px;

@media only screen and (max-width: 600px) {
    display: none;
}
`

const Wrap = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
margin-top: 100px;
@media only screen and (max-width: 600px) {
    margin-top: 30px;
}
`

const Left = styled.div`
width: 50%;

img{
    width: 100%;
}
` 

const Right = styled.div`
width: 50%;
text-align: left;

h1{
    font-weight: 600;
font-size: 30px;
line-height: 40px;
letter-spacing: 0.04em;
text-transform: uppercase;
color: #FFFFFF;
margin-bottom: 40px;
font-family: "Conthrax Sb";
}

p{
    margin: 10px;
    font-size: 20px;
line-height: 30px;
color: #CDD6F5;
}
`
export default BLX
