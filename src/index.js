import './index.css'
import React from "react" // não é isada aqui diretamente , mas é necessaria para aplicação rodar. 
import ReactDom from "react-dom" // reactDom é usado apensas dentro desse arquivo, todos os outros importamos o react.

//import Primeiro from './components/Primeiro'
//import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'

ReactDom.render(
  <div>
    <ComFilhos>
        <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
        </ul>
    </ComFilhos>
 {/*<Primeiro/>
 <ComParametro titulo = "Esse é o título" 
    subtitulo ="Esse é o subtitulo"/>
  <ComParametro titulo = "Opa" 
    subtitulo ="Epa"/>*/}
 </div>
 ,
  document.getElementById('root')
)