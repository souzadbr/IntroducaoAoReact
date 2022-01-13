import './index.css'
import React from "react" // não é isada aqui diretamente , mas é necessaria para aplicação rodar. 
import ReactDom from "react-dom" // reactDom é usado apensas dentro desse arquivo, todos os outros importamos o react.
import App from './App.jsx'


ReactDom.render(
<App></App>,
  document.getElementById('root')
)