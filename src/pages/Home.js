import React from "react";
import styled from "styled-components"
import Usuarios from "../components/Usuarios";


const Home = () => {
    return(
        <div>
        <Titulo>Inicio</Titulo>
        <Usuarios></Usuarios>
        </div>
    )
}

const Titulo = styled.div`
`

export default Home;