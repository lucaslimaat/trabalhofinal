import React, { useEffect, useState } from "react";
import axios from "axios";
import imgEdit from "../img/edit.ico";
import styled from "styled-components";


export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("");

  const url = "http://localhost:8083/";

  useEffect(() => {
    fetch(url + "usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.log(err));
  }, [url]);

  function novosDados() {
    setTipo("novo");
  }

  function cancelarDados() {
    setId("");
    setNome("");
    setEmail("");
    setTipo("");
  }

  function editarDados(cod) {
    console.log(cod);
    let usuario = usuarios.find(item => item.id === cod);
    const {id, nome, email} = usuario;
    console.log(usuario);
    setTipo("editar");
    setId(id);
    setNome(nome);
    setEmail(email);
  }

  function atualizaListaUsuarios(){

    setTipo("");
  }

  function gravaDados() {
    if (nome !== "" && email !== "") {
      if (tipo === "novo") {
        axios
          .post(url + "usuarios", {
            nome: nome,
            email: email,
          })
          .then((response) => atualizaListaUsuarios(response))
          .catch((err) => console.log(err));
      } else if (tipo === "editar") {
          axios.put(url + "usuarios/" + id, {
          id: id,
          nome: nome,
          email: email,
        })
        .then(response => atualizaListaUsuarios(response))
        .catch((err) => console.log(err));
      }
    } else {
      console.log("Preencha os campos");
    }
  }

  return (
    <div>
      <BodyTotal>
      <Body1>
        <Botao type="button" onClick={novosDados}>
          Novo
        </Botao>
      </Body1>
      {tipo ? (
        <Body2>
          <Input
            type="text"
            placeholder="Nome"
            name="txtNome"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Email"
            name="txtEmail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Botao type="button" onClick={cancelarDados}>
            Cancelar
          </Botao>
          
          <Botao  type="button" onClick={gravaDados}>
            Gravar
          </Botao>
        </Body2>
      ) : (
        false
      )}
      <Body3>
      {usuarios
        ? usuarios.map((item) => {
            return (
              <div key={item.id}>
                <Teste>
                  {" "}
                  <Span>{item.id}</Span> - <Span>{item.nome}</Span> - <Span>{item.email}{" "}</Span>
                  <img
                    alt="Editar"
                    src={imgEdit}
                    id={item.id}
                    height={20}
                    width={20}
                    onClick={(e) => editarDados(item.id)}
                  />
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
const Botao = styled.button`
width: 15rem;
height: 2rem;
border-radius: 3px;
border-style: solid;
border-color: yellow;
background-color: yellow;
font-weight: 600;
cursor: pointer;
text-decoration:none;
:hover{
  transform: scale(1.1);
    transition: all 0.5s;
    font-weight: 600;
    background-color: white;
}
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
const Body2 = styled.div`
width: 100%;
height: 200px;
display: flex;
flex-direction: column;
justify-content: space-between;
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
const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  background: white;
  border-style: solid;
  border-color: yellow;
  border-radius: 3px;
  ::placeholder {
    color: gray;
  }
`