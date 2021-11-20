import React from 'react'
import styled from 'styled-components'
function APY() {
    return (
        <Container>
             <Wrap>
                    <h1>Current APY:</h1>
                    <Boxes>
                    <Box>
                        <Head>
                            <img src="/images/icon/apy2.png"/>
                            +
                            <img src="/images/icon/apy4.png"/>
                        </Head>
                        <p>usdc + no lock </p>
                        <Foot>
                            <p>Level 1</p>
                            <h2>34%</h2>
                        </Foot>
                       
                    </Box>

                    <Box>
                        <Head>
                            <img src="/images/icon/apy2.png"/>
                            +
                            <img src="/images/icon/apy4.png"/>
                        </Head>
                        <p>usdc + no lock </p>
                        <Foot>
                            <p>Level 1</p>
                            <h2>34%</h2>
                        </Foot>
                       
                    </Box>

                    <Box>
                        <Head>
                            <img src="/images/icon/apy2.png"/>
                            +
                            <img src="/images/icon/apy4.png"/>
                        </Head>
                        <p>usdc + no lock </p>
                        <Foot>
                            <p>Level 1</p>
                            <h2>34%</h2>
                        </Foot>
                       
                    </Box>

                    <BoxLast>
                        <Head>
                            <img src="/images/icon/apy2.png"/>
                            +
                            <img src="/images/icon/apy4.png"/>
                        </Head>
                        <p>usdc + no lock </p>
                        <Foot>
                            <p>Level 1</p>
                            <h2>34%</h2>
                        </Foot>
                       
                    </BoxLast>
                    </Boxes >
                    </Wrap>  
        </Container>
    )
}
const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;

@media only screen and (max-width: 600px) {
    margin: 0;
}

`
const Wrap = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
overflow: hidden;


h1{
    font-weight: 600;
font-size: 22px;
line-height: 26px;
text-align: center;
letter-spacing: 0.04em;
color: #CDD6F5
font-family: "Conthrax Sb";
margin-bottom: 20px;
color: #CDD6F5;
text-transform: uppercase;
}
`
const Boxes = styled.div`
width: 100%;
display: flex;

@media only screen and (max-width: 600px) {
    flex-direction: column;
    
}
`
const Box = styled.div`
width: 25%;
border-top: 1px solid #2B3246;
border-left: 1px solid #2B3246;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: #CDD6F5;
padding: 10px;
flex-wrap: wrap;

@media only screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    
}

p{
    font-weight: 600;
font-size: 14px;
line-height: 17px;
text-align: center;
letter-spacing: 0.04em;
text-transform: uppercase;
color: #CDD6F5;
margin-bottom: 10px;
}


`

const BoxLast = styled.div`
width: 25%;
border-top: 1px solid #2B3246;
border-left: 1px solid #2B3246;
border-right: 1px solid #2B3246;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: #CDD6F5;
padding: 10px;
flex-wrap: wrap;

@media only screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    
}

p{
    font-weight: 600;
font-size: 14px;
line-height: 17px;
text-align: center;
letter-spacing: 0.04em;
text-transform: uppercase;
color: #CDD6F5;
margin-bottom: 10px;
}


`


const Head = styled.div`
display: flex;
margin-bottom: 10px;
img{
    padding: 0 10px;
}
`

const Foot = styled.div`
display: flex;
justify-content: space-around;

P{
    font-size: 20px;
line-height: 30px;
color: #59648A;
margin-right: 30px;
}

h2{
    font-weight: 600;
font-size: 22px;
line-height: 26px;
color: #CDD6F5;
}
`
export default APY
