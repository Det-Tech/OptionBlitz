import React from 'react'
import styled from 'styled-components'
function DigitalO2() {
    return (
        <Container>
           <Wrap>
               <Head>
               <Box>
                       <img src="/images/21.svg"/>
                       <p>10m to 24h expiration</p>
                   </Box>

                   <Box>
                       <img src="/images/22.svg"/>
                       <p>Up to 200% payout rates</p>
                   </Box>

                   <Box>
                       <img src="/images/23.svg"/>
                       <p>Custom barrier levels</p>
                   </Box>

                   <Box>
                       <img src="/images/24.svg"/>
                       <p>Minimum trade amount $1</p>
                   </Box>
               </Head>
               <Body>
                   <Left>
                       <p>Customise your trading strategy with Touch and No-touch. Touch options allow you to set barriers which the price must touch at least once during the trade term for the trade to win. You can even set more than one barrier; setting two barriers is called a double-touch. One above and one below the spot price if you think the price is likely to be volatile and touch both barriers.</p>
                       <p>No-touch is the inverse, this means that the price must not touch the barrier(s) during the trade term. Setting two barriers is called a double no-touch and means the price must stay inside the range during the entire trade term to win. Do this if you think the price will be stable to win.</p>
                       <p>Payout rates can be up to 200% on these exotic options!</p>
                   </Left>
                   <Right>
                       <img src="/images/lap5.png" />
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
background: url("/images/back4.png");
background-size: cover;
background-repeat: no-repeat;
`

const Wrap = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
overflow: hidden;
margin-top: 120px;
`

const Head = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap


`
const Box = styled.div`
width: 25%;
display: flex;
border: 2px solid #222237;
padding: 20px 10px;
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;

@media only screen and (max-width: 600px) {
    width: 50%;
}

P{
    font-weight: 600;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.04em;
color: #00CD86;
margin-left: 10px;
}
`
const Body = styled.div`
width: 100%;
display: flex;
margin-top: 30px;

@media only screen and (max-width: 600px) {
    flex-direction: column;
}
`

const Left = styled.div`
width: 40%;
text-align: left;
padding-top: 100px;

@media only screen and (max-width: 600px) {
    width: 100%;
}
p{
    font-size: 20px;
line-height: 30px;
color: #CDD6F5;
margin: 20px;
}
`

const Right= styled.div`
width: 60%;

@media only screen and (max-width: 600px) {
    width: 100%;
}

img{
    width: 100%;
}
`

export default DigitalO2
