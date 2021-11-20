import React from 'react'
import styled from 'styled-components'
function MarketsHead() {
    return (
        <Container>
            <Wrap>
                <h1>MARKETS</h1>
                <Image>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Last Price</th>
                        <th>1D Change</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td><img src="/images/81.svg"/>   Bitcoin</td>
                        <td>000.000</td>
                        <td>000.000</td>
                        <td><img src="/images/Graphic.png"/></td>
                    </tr>
                    <tr>
                        <td><img src="/images/82.png"/>  Ethereum</td>
                        <td>000.000</td>
                        <td>000.000</td>
                        <td><img src="/images/Graphic.png"/></td>
                    </tr>
                    <tr>
                        <td><img src="/images/83.png"/> Gold</td>
                        <td>000.000</td>
                        <td>000.000</td>
                        <td><img src="/images/Graphic.png"/></td>
                    </tr>
                    <tr>
                        <td><img src="/images/82.png"/> EUR/USD</td>
                        <td>000.000</td>
                        <td>000.000</td>
                        <td><img src="/images/Graphic.png"/></td>
                    </tr>
                    <tr>
                        <td><img src="/images/82.png"/>  Crude oil </td>
                        <td>000.000</td>
                        <td>000.000</td>
                        <td><img src="/images/Graphic.png"/></td>
                    </tr>
                </table>
                </Image>
                <Para>
                    <p>Visit the OptionBlitz trading academy to learn how to trade on the platform, study technical indicators and develop profitable trading strategies.</p>
                    <button>Start trading</button>
                </Para>
                <ParaTwo>
                    <h1>FEATURED SIGNALS</h1>
                    <p>Latest technical overviews and analysis of your selected instruments, based on recent market activity. The information featured, shown for specific intervals, is a comprehensive summary derived from simple and exponential moving averages along with key technical indicators.</p>
                </ParaTwo>
                <ImageTwo>
                <table>
                    <tr>
                        <th>Asset</th>
                        <th>Chart</th>
                        <th>Type</th>
                        <th>5 min</th>
                        <th>15 min</th>
                        <th>Hourly</th>
                        <th>Daily</th>
                        <th>Trade Now</th>
                    </tr>
                    <tr>
                        <td><img src="/images/grp23.png"/><span>EUR/USD </span>1,282815</td>
                        <td><img src="/images/Graphic.png"/></td>
                        <td><span><li>10 online</li></span><img src="/images/sent.png"/></td>
                        <td>Moving Averages: <br /> Indicators: <br /> Summary:</td>
                        <td>Strong Buy <br /> Strong Buy <br /> <span>Strong Buy</span></td>
                        <td>Neutal <br /> Strong Buy <br /> <span>Buy</span></td>
                        <td>Neutal <br /> Strong Buy <br /> <span>Buy</span></td>
                        <td><img src="/images/vec.png"/></td>
                    </tr>

                    <tr>
                        <td><img src="/images/grp23.png"/><span>EUR/USD </span>1,282815</td>
                        <td><img src="/images/Graphic.png"/></td>
                        <td><span><li>10 online</li></span><img src="/images/sent.png"/></td>
                        <td>Moving Averages: <br /> Indicators: <br /> Summary:</td>
                        <td>Strong Buy <br /> Strong Buy <br /> <span>Strong Buy</span></td>
                        <td>Neutal <br /> Strong Buy <br /> <span>Buy</span></td>
                        <td>Neutal <br /> Strong Buy <br /> <span>Buy</span></td>
                        <td><img src="/images/vec.png"/></td>
                    </tr>

                    <tr>
                        <td><img src="/images/grp23.png"/><span>EUR/USD </span>1,282815</td>
                        <td><img src="/images/Graphic.png"/></td>
                        <td><span><li>10 online</li></span><img src="/images/sent.png"/></td>
                        <td>Moving Averages: <br /> Indicators: <br /> Summary:</td>
                        <td>Strong Buy <br /> Strong Buy <br /> <span>Strong Buy</span></td>
                        <td>Neutal <br /> Strong Buy <br /> <span>Buy</span></td>
                        <td>Neutal <br /> Strong Buy <br /> <span>Buy</span></td>
                        <td><img src="/images/vec.png"/></td>
                    </tr>

                    <tr>
                        <td><img src="/images/grp23.png"/><span>EUR/USD </span>1,282815</td>
                        <td><img src="/images/Graphic.png"/></td>
                        <td><span><li>10 online</li></span><img src="/images/sent.png"/></td>
                        <td>Moving Averages: <br /> Indicators: <br /> Summary:</td>
                        <td>Strong Buy <br /> Strong Buy <br /> <span>Strong Buy</span></td>
                        <td>Neutal <br /> Strong Buy <br /> <span>Buy</span></td>
                        <td>Neutal <br /> Strong Buy <br /> <span>Buy</span></td>
                        <td><img src="/images/vec.png"/></td>
                    </tr>
                  

                </table>
                </ImageTwo>
                <ParaThree>
                    <p>Visit the OptionBlitz trading academy to learn how to trade on the platform, study technical indicators and develop profitable trading strategies</p>
                    <div><a>trading academy</a></div>
                </ParaThree>
            </Wrap>
        </Container>
    )
}
const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background: url("/images/MARKETS.png");
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

@media only screen and (max-width: 600px) {
    margin-top: 30px;
}

    h1{
        font-weight: 600;
font-size: 34px;
line-height: 46px;
text-align: center;
letter-spacing: 0.04em;
color: #00CD86;  
font-family: "Conthrax Sb"; 
    }
`

const Image = styled.div`
width: 80%;
margin-top: 80px;

table{
    width: 100%;
    border-top: 1px solid #2B3246;
    border-left: 1px solid #2B3246;
    border-right: 1px solid #2B3246;
    border-radius: 15px;
    margin-bottom: 20px;
    font-family: "Conthrax Sb"; 

    td{
        border-bottom: 1px solid #2B3246;
        padding: 20px;
        color: #ffff;
        font-size: 25px;
        text-align: left;

        img{
            margin: 0 10px;
        }
    }
    th{
        padding: 10px;
        border-bottom: 1px solid #2B3246;
        color: #59648A;
        text-align: left;
    }
}
`

const Para = styled.div`
width: 80%;
display: flex;
align-items: center;
margin-top: 40px;
justify-content: space-around;

@media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
}

p{
    width: 70%;
    text-align: left;
    font-size: 20px;
line-height: 30px;
color: #CDD6F5;

@media only screen and (max-width: 600px) {
    width: 100%;
}
}

button{
    width: 286px;
height: 54px;
background: #51AD5F;
border-radius: 4px;
font-weight: 600;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.04em;
text-transform: uppercase;
color: #175610;
cursor: pointer;

@media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 30px;
}

}

`


const ParaTwo = styled.div`
width: 100%;
display: flex;
align-items: center;
margin-top: 80px;
justify-content: space-around;
text-align: left;

@media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
}
h1{
    width: 50%;
    font-weight: 600;
font-size: 30px;
line-height: 40px;
color: #FFFFFF;
letter-spacing: 0.04em;
padding-right: 300px;
font-family: "Conthrax Sb";

@media only screen and (max-width: 600px) {
    padding: 0;
    width: 100%;
}
}
p{
    width: 50%;
    font-size: 20px;
line-height: 30px;
color: #CDD6F5;

@media only screen and (max-width: 600px) {
    margin-top: 30px;
    width: 100%;
}
}
`

const ImageTwo = styled.div`
width: 100%;
margin-top: 70px;

table{
    width: 100%;
    border-top: 1px solid #2B3246;
    border-left: 1px solid #2B3246;
    border-right: 1px solid #2B3246;
    border-radius: 15px;
    margin-bottom: 20px;
    font-family: "Conthrax Sb"; 

    span{
        color: #00CD86;
    }

    td{
        border-bottom: 1px solid #2B3246;
        padding: 20px;
        color: #ffff;
        font-size: 15px;
        text-align: left;

        img{
            margin: 0 10px;
        }
    }
    th{
        padding: 10px;
        border-bottom: 1px solid #2B3246;
        color: #59648A;
        text-align: left;
    }
}
`

const ParaThree = styled.div`
width: 100%;
display: flex;
align-items: center;
margin-top: 40px;
justify-content: space-around;

@media only screen and (max-width: 600px) {
    flex-direction: column;
}


div{
    width: 291px;
    height: 54px;
    border: 1px solid #374459;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 600px) {
        margin-top: 30px;
        width: 100%;
    }
    a{
        font-size: 14px;
    line-height: 17px;
    color: #51AD5F;
    letter-spacing: 0.04em;
    font-family: "Conthrax Sb";
    text-transform: uppercase;
    
    }
}

p{
    font-size: 20px;
line-height: 30px;
color: #CDD6F5;
text-align: left;
padding-right: 200px;

@media only screen and (max-width: 600px) {
    padding: 0;
}
}


`
export default MarketsHead
