import React from 'react'
import styled from 'styled-components'
function RoadMap() {
    return (
        <Container>
            <Wrap>
                <h1>ROADMAP</h1>
                <Head>
                    <div>
                        <p>Get all the facts about Optionblitz, our tokenomics and valuations.</p>
                        <h2>READ THE WHITEPAPER</h2>
                    </div>

                    <div>
                        <p>Check the results of our security audit.</p>
                        <h2>SECURITY AUDIT</h2>
                    </div>
                </Head>
                <Body>
                    <div>
                        <img src="/images/Roadmap.png"/>
                    </div>
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
margin-top: 100px;
@media only screen and (max-width: 600px) {
    margin-top: 30px;
}

h1{
    font-size: 34px;
line-height: 46px;
text-align: center;
letter-spacing: 0.04em;
font-family: "Conthrax Sb";
margin-bottom: 40px;
color: #00CD86;
}
`

const Head = styled.div`
width: 100%;
display: flex;

div{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-top: 1px solid #2B3246;
    border-right: 1px solid #2B3246;
    border-left: 1px solid #2B3246;
    padding: 20px;

    p{
        font-size: 20px;
line-height: 30px;
color: #CDD6F5;
margin-bottom: 20px;
    }

    h2{
        font-size: 14px;
line-height: 17px;
letter-spacing: 0.04em;
text-transform: uppercase;
color: #51AD5F;
    }
}

`

const Body = styled.div`
width: 100%;
displa: flex;
align-items: center;
justify-content: center;
margin-top: 80px;
div{
    width: 80%;
    margin-left: 143px;
    img{
        width: 100%;
    }
}
`
export default RoadMap
