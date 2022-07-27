import React from "react";
import styled from "styled-components";
import ImgA from "../img/camisa1.jpg";


const Lançamentos = () => {


    return (
        <Body>
            <BodyText>
                <Text1>Lançamentos</Text1>
            </BodyText>
            <BodyCards1>
                <Card>
                    <Img src={ImgA} />
                    <TxtFoto>Roupa 1</TxtFoto>
                </Card>
                <Card>
                    <Img src={ImgA} />
                    <TxtFoto>Roupa 1</TxtFoto>
                </Card>
                <Card>
                    <Img src={ImgA} />
                    <TxtFoto>Roupa 1</TxtFoto>
                </Card>
            </BodyCards1>
            <BodyCards2>
                <Card>
                    <Img src={ImgA} />
                    <TxtFoto>Roupa 1</TxtFoto>
                </Card>
                <Card>
                    <Img src={ImgA} />
                    <TxtFoto>Roupa 1</TxtFoto>
                </Card>
                <Card>
                    <Img src={ImgA} />
                    <TxtFoto>Roupa 1</TxtFoto>
                </Card>
            </BodyCards2>
        </Body>

    )
}

const Body = styled.div`
height: auto;
width: auto;
`
const BodyText = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 150px;
width: 100%;
background: white;
`
const Text1 = styled.div`
color: black;
font-size: 4rem;
font-style: italic;
font-family: 'Montserrat', sans-serif;
`
const BodyCards1 = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
height: auto;
width: 100%;
background: white;
`
const BodyCards2 = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 20px;
margin-bottom: 20px;
align-items: center;
height: auto;
width: 100%;
background: white;
`
const Card = styled.div`
display: flex;
flex-direction: column;
`
const Img = styled.img`
width: 362px;
height: 471px;
border-width: 3px;
border-color: black;
border-style: solid;
border-radius: 16px;
cursor: pointer;
:hover{
  border-color: #D3D3D3;
  transition: 0.3s;
}
`
const TxtFoto = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 50px;
    text-align: center;
`

export default Lançamentos