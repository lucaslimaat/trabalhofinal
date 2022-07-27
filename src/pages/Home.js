import React from "react";
import Header from "../components/Header"
import Carrossel from "../components/Carrossel"
import Lançamentos from "../components/Lançamentos"
import Footer from "../components/Footer"


const Home = () => {
    return(
        <div>
        <Header/>
        <Carrossel/>
        <Lançamentos/>
        <Footer/>
        </div>
    )
}

export default Home;