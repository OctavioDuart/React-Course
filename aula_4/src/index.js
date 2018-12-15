import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTES EXTERNOS
import ComponenteFuncional from './components/componente_funcional';
import ComponenteDeClasses from './components/componente_de_classe';
 

const App = () => {
    return (
        <div>
           <ComponenteFuncional/>         
           <ComponenteDeClasses/>
        </div>
    )
}

ReactDOM.render(<App/> , 
    document.getElementById('root')
);