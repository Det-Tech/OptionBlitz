import React from 'react'
import styled from 'styled-components'
function TokenSale() {
    return (
        <Container>
           <Wrap>
           <h1>OPTIONBLITZ TOKEN SALE</h1>
            <p>Learn more about BLX and the Optionblitz ecosystem by downloading our whitepaper now.</p>
            <div>
                <img src="/images/Timer.png"/>
            </div> 
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
background: url("/images/Bg5.png");
background-size: cover;
background-repeat: no-repeat;
margin-top: 200px;


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

h1{
    font-weight: 600;
font-size: 34px;
line-height: 46px;
color: #00CD86;
font-family: "Conthrax Sb";
margin-bottom: 20px;
}

p{
    font-size: 20px;
line-height: 30px;
color: #CDD6F5;
margin-bottom: 50px;
}
div{
    width: 70%;

    img{
        width: 100%;
    }
}
`
export default TokenSale
