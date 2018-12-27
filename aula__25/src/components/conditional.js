import React from 'react';

const Conditional = () => {
    //Trocando o valor da variável a renderização do componente é alterada . 
    const value = false ; 

    return (
        <div>
            {value ? <div>Renderização True </div> : <div> Renderização False</div>}
        </div>
    )
}

export default Conditional ; 