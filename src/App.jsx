import react from "react";
import Primeiro from "./components/Primeiro";
import ComParametro from "./components/ComParametro";
import ComFilhos from "./components/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional";
import './App.css'



// eslint-disable-next-line import/no-anonymous-default-export
export default (porps) => (
    <div className="App">
        <Card titulo="#01 - Primeiro Componente"><Primeiro/></Card>
        <Card titulo="#02 - Componente Com Paramentro">
            <ComParametro titulo = "Esse é o título" 
            subtitulo ="Esse é o subtitulo"/>
        </Card>
        <Card titulo="#03 - Componente Com Filhos">
            <ComFilhos>
            <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
            </ul>
             </ComFilhos>
        </Card>
        <Card titulo="#05- Condicional">
            <Condicional numero={10}/>
        </Card>    
       </div>
)