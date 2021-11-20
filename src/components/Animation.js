import React from 'react'
import styled from 'styled-components'

function Animation() {
    return (
        <Container>
            <Wrap>
                <h1>OPTIONBLITZ ECOSYSTEM</h1>
                <Image>
                <img src="/images/im62.png"/>
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


`

const Wrap = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1{
    font-weight: 600;
    font-size: 34px;
    line-height: 46px;
    color: #00CD86;
    font-family: "Conthrax Sb";
    margin: 80px 0;

    @media only screen and (max-width: 600px) {
        font-size: 24px;
        line-height: 34px;
        margin: 40px 0;

    }
  }
`

const Image = styled.div`
  width: 90%;

  @media only screen and (max-width: 600px) {
    width: 100%;
}

  img{
      width: 100%;
  }
`
export default Animation
