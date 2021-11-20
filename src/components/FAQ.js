import React from 'react'
import styled from 'styled-components'
function FAQ() {
    return (
        <Container>
            <Wrap>
                <h1>FAQ</h1>
            <div>
            <h1>How can I close my account?</h1>
            </div>

            <div>
            <h1>I have a virtual catd that I can’t varified. What should I do?</h1>
            </div>

            <div>
            <h1>How do I change my home address?</h1>
            </div>

            <div>
            <h1>How do I unsubscribe from emails?</h1>
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
background: url("/images/Bg11.png");
background-size: cover;
background-repeat: no-repeat;

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
margin-top: 200px;
@media only screen and (max-width: 600px) {
    margin-top: 30px;
}

h1{
    font-weight: 600;
font-size: 34px;
line-height: 46px;
letter-spacing: 0.04em;
text-transform: uppercase;
color: #00CD86;
font-family: "Conthrax Sb";

}

    div{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        border: 1px solid #374459;
        margin: 10px 0;
        border-radius: 15px;

        h1{
            font-weight: 600;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.04em;
text-transform: uppercase;
font-family: "Conthrax Sb";
color: #CDD6F5;
        }
    }   

`
export default FAQ
