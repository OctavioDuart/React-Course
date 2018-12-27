import React from 'react';

const ConditionalWithFunction = () => {

    const generateNumber = () => {
        let value_return = false;
        let value =  Math.floor(Math.random() * 10) ;        
        (value % 2 === 0 ) ? value_return = true : value_return = false ;
        console.log("Valor gerado = " , value);
        return value_return
    }
    
    const returnBooleanValue = () => {
        return (
            generateNumber() ? 
                <div>Número Gerado é Par (Veja o Console)</div> : <div>Número Gerado é Impar (Veja o Console)</div>
            )
    }

    return (
        <div>
             {returnBooleanValue()}
        </div>
       
    )
}

export default ConditionalWithFunction