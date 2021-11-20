import React from 'react'
import styled from 'styled-components'
function Fees() {
    return (
        <Container>
            <Wrap>
            <Main>
                <Left>
                    <img src="/images/laptopSide.png"/>
                </Left>
                <Right>
                    <h1>Fees</h1>
                    <p>Spreads are fixed at 0.1%, a transaction fee is charged on the notional value of your position at 0.1% but you can slash this by 25% by paying in BLX. </p>
                    <span>Learn more about BLX</span>
                </Right>
            </Main>
            <Footer>
                <p>You will also pay or receive a funding rate which gets priced into your knock-out barrier level. You can also sell your position back to Optionblitz at the market price minus 5% fee.</p>
                <p>Turbos are a hugely versatile trading tool and offer the unique ability to offer much higher leverage in volatile markets since there is no margin which means no margin calls or surprise liquidations.</p>
                <p>Our UX makes trading easy and simple to use our interface, arguably the slickest of all defi platforms.</p>
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
background: url("/images/background.png");
background-size: cover;
background-repeat: no-repeat;



@media only screen and (max-width: 600px) {
    margin-top: 0;
}
`

const Wrap = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
overflow: hidden;

`
const Main = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;

@media only screen and (max-width: 600px) {
    flex-direction: column;
}

`

const Footer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
}
p{
    font-size: 16px;
line-height: 22px;
color: #CDD6F5;
text-align: left;
margin: 20px;


@media only screen and (max-width: 600px) {
    margin: 10px;
    font-size: 16px;
line-height: 22px;
}

}
`

const Left = styled.div`
  width: 60%;
  @media only screen and (max-width: 600px) {
    width: 100%;
}


  img{
      width: 150%;
  }
`

const Right = styled.div`
display: flex;

justify-content: center;
flex-direction: column;
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
color: #CDD6F5;
text-align: left;
padding-bottom: 30px;

@media only screen and (max-width: 600px) {
    font-size: 20px;
line-height: 24px;
}
}

p{
    font-size: 20px;
line-height: 30px;
color: #CDD6F5;

@media only screen and (max-width: 600px) {
    font-size: 16px;
line-height: 22px;
}
}

span{
    border: 1px solid rgba(205, 214, 245, 1);
    width: 350px;
height: 57px;
margin-top: 30px;
cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
font-weight: 600;
font-size: 14px;
line-height: 17px;
font-family: "Conthrax Sb";
]text-align: center;
letter-spacing: 0.04em;
text-transform: uppercase;
text-align: center;
color: #51AD5F;

@media only screen and (max-width: 600px) {
    font-size: 14px;
line-height: 17px;
width: 100%;
}

}
`


export default Fees
