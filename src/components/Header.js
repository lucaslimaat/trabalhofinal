import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom";

const Header = () => {

    return (

        <Body>
            <Logo1>Outer</Logo1>
            <BodyBotoes>
                <MenuLink href="/">
                    Início
                </MenuLink>
                <Link to="/produtos">
                    Produtos
                </Link>
            </BodyBotoes>
            <Logo2>Outer</Logo2>
        </Body>

    )
}

const Body = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 100px;
width: 100%;
background: black;
`
const BodyBotoes = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Logo1 = styled.div`
margin-left: 5%;
color: white;
font-size: 4rem;
font-family: 'Quicksand', sans-serif;
`
const Logo2 = styled.div`
margin-right: 5%;
color: white;
font-size: 4rem;
font-family: 'Quicksand', sans-serif;
`
const MenuLink = styled.a`
margin-inline: 40px;
text-decoration: none;
color: white;
font-family: Josefin Sans, Arial, Helvetica, sans-serif;
font-size: 25px;
transition: .3s;
:hover {
  color: #808080;
}
`


export default Header