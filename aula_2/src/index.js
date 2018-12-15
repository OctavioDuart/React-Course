import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <h1>Anotação :</h1>
            <code>Ao escrever o código jsx lembre-se sempre de iniciar e encerrar os dados com uma única tag.</code>  <br/>
            <code>Ao contrário do HTML convencional , React não aceita erros ao abrir ou fechar tags.</code>              
        </div>
    )
}

ReactDOM.render(<App/> , 
    document.getElementById('root')
);