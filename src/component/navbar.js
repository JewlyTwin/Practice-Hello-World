import React from 'react'
import styled from 'styled-components'
import Topbar from '/img/top-bar-bg.png'

const NavBarSection = styled.div`
  height: 94px;
  width: 100%;
  margin-top: 60px;
  height: 94px;
  background-image: url(${Topbar});
  display: block;
  position: sticky;
  top: 0;
`

const Img = styled.img`
  top: -48px;
  position: absolute;
  left: 50%;
  height: 197px;
  width: 197px;
  margin-left: -99px;
`

const NavbarRight = styled.ul`
  position: relative;
  display: block;
  font-size: 24px;
  text-shadow: 0 1px 1px #000;
  font-family: Anton, sans-serif;
  text-transform: uppercase;
  float: right;
`

const NavbarRightFirst = styled.li`

`

const NavbarRightLast = styled.li`

`

const Navbar = () => (
  <NavBarSection>
    <div className='container'>
      <Img src='/img/logo.png'/>
      <NavbarRight>
        <NavbarRightFirst>
          Our news
        </NavbarRightFirst>
        <NavbarRightLast>
          Contact us
        </NavbarRightLast>
      </NavbarRight>
    </div>
  </NavBarSection>
)


export default Navbar
