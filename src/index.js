import './index.css'
import React from "react" // não é isada aqui diretamente , mas é necessaria para aplicação rodar. 
import ReactDom from "react-dom" // reactDom é usado apensas dentro desse arquivo, todos os outros importamos o react.

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'

ReactDom.render(
  <div>
 <Primeiro/>
 <ComParametro/>
  </div>
 ,
  document.getElementById('root')
)