import React from 'react'
import styled from 'styled-components'
function Nav() {
    return (
        <Container>
            <Logo>
                <img src="/images/logo_Coin.png"/>
            </Logo>
            <Menu>
                <span><a>About</a></span>
                <span><a>Ecosystem</a></span>
                <span><a>Trading Products</a></span>
                <span><a>Markets</a></span>
                <span><a>Affilates</a></span>
                <span><a>Staking</a></span>
                <span><a>BLX tokens sale</a></span>
                <span><a>Roadmap</a></span>
                <span><a>FAQ</a></span>
                <span><a>Blog</a></span>
                <span><a>Trading Acadamy</a></span>
                <span><a>Help</a></span>
            </Menu>
            <Login>
                <button>LOGIN</button>
            </Login>
        </Container>
    )
}
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 70px;
  padding: 10px;
`

const Logo = styled.div``

const Menu = styled.div`
  display: flex;
  span{
    padding: 10px;
  }
  a{
      color: #fff;
      font-size: 15px;
      color: #CDD6F5;
  }
`

const Login = styled.div`

button{
    width: 100px;
    height: 38px;
    background: #F08F1C;
    border-radius: 4px;
    border: none;
    outline: noen;
}`
export default Nav
