import React from 'react'
import styled from 'styled-components'
function Affiliates() {
    return (
        <Container>
            <Wrap>
                <h1>Affiliates</h1>
                <p>Join the Optionblitz affiliate program and get up to 40% of the transaction fees spent by your referrals and 12% of net profit generated! No registration or sign up/KYC required, just share your links and start earning. Commission withdrawals are instant and unlimited!</p>
                <button>Join now</button>
                <Image>
                    <img src="/images/image2.png"/>
                </Image>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background: url("/images/Bg4.png");
background-size: cover;
background-repeat: no-repeat;
margin-top: 200px;

@media only screen and (max-width: 600px) {
    margin-top: 100px;
}
`

const Wrap = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
overflow: hidden;

margin-top: 60px;

@media only screen and (max-width: 600px) {
    margin-top: 30px;
}

h1{
    font-weight: 600;
font-size: 34px;
line-height: 46px;
font-family: "Conthrax Sb";
letter-spacing: 0.04em;
text-transform: uppercase;
color: #00CD86;
margin-bottom: 40px;
}

p{
    font-size: 20px;
line-height: 30px;
color: #CDD6F5;
margin-bottom: 30px;
width: 50%;

@media only screen and (max-width: 600px) {
    width: 100%;
}
}
button{
    width: 286px;
height: 54px;
background: #51AD5F;
border-radius: 4px;
margin-bottom: 30px;
font-weight: 600;
font-size: 14px;
line-height: 17px;
color: #175610;
border: none;
outline: none;
}
`

const Image = styled.div`
width: 100%;

img{
    width: 100%;
}
`
export default Affiliates
