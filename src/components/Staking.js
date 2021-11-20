import React from 'react'
import styled from 'styled-components'
function Staking() {
    return (
        <Container>
            <Wrap>
                <Body>
                    <Left>
                        <h1>Staking</h1>
                        <p>Provide liquidity and earn up to 85% APY with zero impermanent loss. Optionblitz allows investors to participate in profit sharing in exchange for staking USDC to the protocol. You can supercharge your rewards by dual-staking with our BLX token and enhance them further by locking funds for a fixed duration. You can also set 0 duration to receive the base reward and withdraw your capital at any time with no delays.</p>
                        <div>
                            <img src="/images/chart.png"/>
                        </div>
                        <button>start staking</button>
                    </Left>
                    <Right>
                        <img src="/images/c4.png"/>
                    </Right>
                </Body>
               
            </Wrap>
        </Container>
    )
}
const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background: url("/images/Bg5.png");
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
flex-direction: column;
overflow: hidden;
margin-top: 300px;
@media only screen and (max-width: 600px) {
    margin-top: 30px;
}
`

const Body = styled.div`
width: 100%;
display: flex;

@media only screen and (max-width: 600px) {
    flex-direction: column;
}

`

const Left = styled.div`
width: 45%;
text-align: left;

@media only screen and (max-width: 600px) {
    width: 100%;
}


h1{
    font-weight: 600;
font-size: 34px;
line-height: 46px;
letter-spacing: 0.04em;
text-transform: uppercase;
color: #00CD86;
margin-bottom: 40px;
font-family: "Conthrax Sb";
}
p{
    font-size: 20px;
line-height: 30px;
color: #CDD6F5;
}
div{
    width: 100%;

    img{
        width: 100%;
    }
}
button{
    width: 286px;
height: 54px;
background: #51AD5F;
margin-top: 30px;
font-weight: 600;
font-size: 14px;
line-height: 17px;
color: #175610;
letter-spacing: 0.04em;
font-family: "Conthrax Sb";
border: none;
outline: none;
text-transform: uppercase;
}

`

const Right = styled.div`
width: 55%;
@media only screen and (max-width: 600px) {
    width: 100%;
}
img{
    width: 100%;
    margin-top: 50px;

    @media only screen and (max-width: 600px) {
        margin-top: 20px;
    }
}
`


export default Staking
