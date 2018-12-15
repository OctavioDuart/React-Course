import React from 'react';          
import ReactDOM from 'react-dom'    

const App = () => {
    return <h1>Hello World !</h1>
}

ReactDOM.render(
    <App/> , 
    document.querySelector('#root')
);

/*
    @ Na Linha 1 estamos importando o React 
    @ E mesmo que visualmente ele não esteja sendo usado
    @ É ele o responsável por lê o código JSX e traduzir para que
    @ O Browser compreenda - (Browser's NÃO compreendem JSX)

    @ Na linha 2 importamos o ReactDOM, pois é ele
    @ O responsável por renderizar os componentes JSX no navegador

    @ Linha 4 a 6 , criamos um componente

    @ Linha 8 a 11 usamos o método render do ReactDOM,
    @ Neste método passamos dois parâmetros o primeiro é o elemento 
    @ JSX a ser renderizado e o segundo é em qual elemento do DOM o mesmo
    @ Será exibido , nesse caso estamos inserindo ele em uma div na qual
    @ Estamos "achando" por seu id
*/