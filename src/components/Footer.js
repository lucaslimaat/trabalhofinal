import React from "react"
import styled from "styled-components"
 
const Footer = () => {

    return (

        <Body>
            <BodyRodape>
            <Title>Outer</Title>
            <Text>A Outer é uma loja de roupas online que surgiu em 2022, contendo roupas e artigos de moda. Com marcas como: Nike, Adidas, Puma, Lacoste, New Era, nosso estoque oferece o melhor serviço possivel. Nossa venture já nasceu cheia de expectativas e possibilidades, renovando-as mês a mês, sempre somando qualidade aos produtos que oferece à seus clientes.</Text>
            </BodyRodape>
            <Container>
            <Copy>Copyright &copy;2022 Outer Loja Oficial</Copy>
            </Container>
        </Body>

    )
}

const Body = styled.div`

`

const BodyRodape = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 100%;
height: 45vh;
background: #EFEFEF;
`
const Title = styled.div`
margin-inline: 40px;
text-decoration: none;
text-align: center;
color: black;
font-family: Josefin Sans, Arial, Helvetica, sans-serif;
font-size: 50px;
`
const Text = styled.div`
text-decoration: none;
color: black;
font-family: Josefin Sans, Arial, Helvetica, sans-serif;
font-size: 25px;
width: 900px;
margin: 10px auto;
line-height: 30px;
font-size: 20px;
text-align: center;
@media screen and (max-width: 900px){
 width: 500px;
 font-size: 15px;
}
`
const Container = styled.div`
    background: #EFEFEF;
    width: 97%;
    height: auto;
    padding: 0 20px;
    text-align: right;
`
const Copy = styled.div`
font-size: 14px;
word-spacing: 2px;
font-family: Josefin Sans, Arial, Helvetica, sans-serif;
margin-right: 10px;
`

export default Footer