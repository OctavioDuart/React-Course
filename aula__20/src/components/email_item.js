import React from 'react';

const EmailItem1 = (props) => {   
    return (
        <div>
            {props.match.params.id} - {props.match.params.departament} 
        </div>
    )
}

export default EmailItem1;

/*
    Na linha 6 recebemos através do props parâmetros que serão usados dinâmicamente na URL
*/