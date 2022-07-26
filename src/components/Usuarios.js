import React, { useEffect, useState } from "react";
import styled from "styled-components";



export default function Usuarios() {
  const [produtos, setProdutos] = useState([]);
  


  const url = "http://localhost:8083/";

  useEffect(() => {
    fetch(url + "produtos")
      .then((response) => response.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.log(err));
  }, [url]);




  return (
    <div>
      <BodyTotal>
      <Body1>
      </Body1>
          
      
      <Body3>
      {produtos
        ? produtos.map((item) => {
          console.log(item)
            return (
              <div key={item.id}>
                <Teste>
                  
                  {" "}
                  <Imagens src={`img/${item.img}`} alt="imgcamisa"/>
                  <Span>{item.id}</Span> - <Span>{item.nome_produto}</Span> - <Span>{item.tamanhos_disp}{" "}</Span>
             
                </Teste>
              </div>
            );
          })
        : false}
        </Body3>
        </BodyTotal>
    </div>
  );
}
const BodyTotal = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: black;
`
const Teste = styled.div`
background-color: black;
`


const Span = styled.span`
color: yellow;
`
const Body1 = styled.div`
width: 100%;
height: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
`

const Body3 = styled.div`

height: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
background-color: black;
text-align: left;
`
const Imagens = styled.img`
height: 50px;
width: 50px;
`