import React from 'react'
import styled from 'styled-components'
function Profile() {
    return (
        <Container>
            <Wrap>
                <img src="/images/image.png"/>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/images/bgi.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    height: 50vh;
    align-items: flex-start;
  }

`
const Wrap = styled.div`
  width: 90%;

  img{
      width: 100%;
  }
`

export default Profile
