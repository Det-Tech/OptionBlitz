import React from 'react'
import styled from 'styled-components'
function DAO() {
    return (
        <Container>
            <Wrap>
                <Left>
                    <h1>What is the Optionblitz DAO?</h1>\
                    <p>OptionBlitz DAO is a decentralised autonomous organisation driven by the community of BLX tokens holders where BLX is an ERC-20 utility token minted        on the Ethereum mainnet. The OptionBlitz DAO will         be deployed on Arbitrum and leverage the Aragon platform  as a basis for the DAO.</p>
                    <p>The Optionblitz DAO is a completely separate entity          to the Optionblitz trading protocol. The DAO behaves like  a community run Treasury, managing the funds invested into it strictly according to the wishes of the BLX holders. It’s mission is to deliver exceptional returns to the investors by leveraging the Optionblitz protocol to generate rewards earned from traders fees. As the protocol grows and is expanded by the founders, the DAO’s returns will also grow in size and governance will remain democratic, transparent and accountable throughout.
</p>
                </Left>
                <Right>
                    <img src="/images/image57.png"/>
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

const Right = styled.div`
width: 50%;

img{
    width: 100%;
}
`
export default DAO
