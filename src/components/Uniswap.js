import React from 'react'
import styled from 'styled-components'
function Uniswap() {
    return (
        <Container>
            <Wrap>
            <Left>
                <h1>UniSwap listing</h1>
                <p>Upon successful sale, OptionBlitz will list the BLX token   on uniswap at a price slightly higher than the last IBCO price and with liquidity from the reserve pool, roughly equal to 1/3rd of the total pool.</p>
                <p>For example, if the token sells out and the final price          of 0.43 on the IBCO is reached. The token will be listed     on UniSwap with 1/3rd of the cash reserve pool (333 333 USD) at a price of about 0.45. In order to provide the counter liquidity, 740 740 tokens form the token reserve pool will be used.</p>
                <p>For more information read the whitepaper here</p>
            </Left>
            <Right>
                <div>
                <img src="/images/image756.png"/>
                </div>
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
background: url("/images/Bg8.png");
background-size: cover;
background-repeat: no-repeat;
margin-top: 100px;

@media only screen and (max-width: 600px) {
    margin-top: 50px;
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
    flex-direction: column;
}
`

const Left = styled.div`
width: 40%;
text-align: left;

@media only screen and (max-width: 600px) {
    width: 100%;
}

h1{
    font-weight: 600;
font-size: 30px;
line-height: 40px;
font-family: "Conthrax Sb";
padding-bottom: 30px;
border-bottom: 1px solid #222237;
color: #FFFFFF;
text-transform: uppercase;
}

p{
    font-size: 20px;
line-height: 30px;
color: #CDD6F5;
margin: 20px 0;
}
`

const Right = styled.div`
width: 60%;
display: flex;
align-items: center;
justify-content: flex-end;

@media only screen and (max-width: 600px) {
    width: 100%;
}
div{
    width: 80%;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }

    img{
        width: 100%;
    }
}
`
export default Uniswap
