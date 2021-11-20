import React from 'react'
import styled from 'styled-components'
function DAO() {
    return (
        <Container>
            <Wrap>
                <Left>
                  <img src="/images/image58.png"/>
                </Left>
                <Right>
                <h1>What do I need to buy BLX?</h1>\
                    <p>All you need is USDC and to pass KYC to be whitelisted for the token sale, only US residents are restricted from the token sale but they are not restricted from buying BLX from uniswap after the fund raise ends. You can buy USDC using our integrated payment gateways or on most crypto exchange sites.</p>
                    
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
flex-direction: column;
background: url("/images/Bg9.png");
background-size: cover;
background-repeat: no-repeat;



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
padding-bottom: 30px;
border-bottom: 1px solid #222237;
margin-bottom: 30px; 
font-family: "Conthrax Sb";
 }

 p{
     margin: 10px;
    font-size: 20px;
    line-height: 30px;
    color: #CDD6F5;
 }



`
export default DAO
