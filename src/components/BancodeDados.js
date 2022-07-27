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
        <Body1></Body1>

        <Body3>
          {produtos
            ? produtos.map((item) => {
                console.log(item);
                return (
                  <div key={item.id}>
                    <BodyProdutos>
                      <Teste>
                        <Imagens src={`img/${item.img}`} alt="imgcamisa" />
                        <Span>{item.nome_produto}</Span>
                        <Span>Tamanhos Disponíveis: {item.tamanhos_disp} </Span>
                      </Teste>
                    </BodyProdutos>
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
  background-color: white;
`;
const BodyProdutos = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
  height: auto;
  width: 100%;
  background: white;
  flex-wrap: wrap;
`;

const Teste = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Span = styled.span`
  color: black;
  text-align: center;
`;
const Body1 = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Body3 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: white;
  text-align: left;
  flex-wrap: wrap;
`;
const Imagens = styled.img`
width: 400px;
height: 400px;
border-width: 3px;
border-color: black;
border-style: solid;
border-radius: 16px;
cursor: pointer;
:hover{
  border-color: #D3D3D3;
  transition: 0.3s;
`;
