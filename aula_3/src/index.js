import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTES EXTERNOS
import Header from './components/external_component'; // Importamos o Componente

const App = () => {
    return (
        <div>
           <Header/>         
        </div>
    )
}

ReactDOM.render(<App/> , 
    document.getElementById('root')
);