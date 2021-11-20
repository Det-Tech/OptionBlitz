import React from 'react'
import styled from 'styled-components'
function DigitalOption() {
    return (
        <Container>
            <Wrap>
                <Left>
                    <img src="/images/mobv1.png"/>
                </Left>
                <Right>
                    <h1>Digital options: <br />Binary</h1>
                    <p>Profit from changes in the price of all our supported markets with binary options. Avoid other brokers which manipulate prices and restrict deposits/withdrawals by trading with Optionblitz.</p>
                    <p>You can trade any expiry from 10 seconds to 1 hour with guaranteed execution and prices with completely transparent payout rates.</p>
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
background: url("/images/background3.png");
background-size: cover;
background-repeat: no-repeat;
`

const Wrap = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
margin-top: 100px;

@media only screen and (max-width: 600px) {
    flex-direction: column;
    margin-top: 30px;
}
`

const Left = styled.div`
width: 50%;

@media only screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 40px;
}

img{
    width: 100%;
}
`

const Right = styled.div`
width: 50%;
text-align: left;
margin-left: 40px;

@media only screen and (max-width: 600px) {
    width: 100%;
    margin: 0;
}

h1{
    font-size: 30px;
line-height: 40px;
font-family: "Conthrax Sb";
color: #CDD6F5;
font-weight: 600;
letter-spacing: 0.04em;
text-transform: uppercase;

@media only screen and (max-width: 600px) {
    font-size: 20px;
line-height: 24px;
letter-spacing: 0.04em;
}
}

p{
    font-size: 20px;
line-height: 30px;
color: #CDD6F5;
margin: 10px;

@media only screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
}
}
`

export default DigitalOption
