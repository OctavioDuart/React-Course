import React from 'react';

// Componentes Externos
import MemberItem from './list_item';

const List = ({mbr}) => { //  Usando o Destruct

    const members = mbr.map((member) => {
        return (
            <MemberItem key={member.id} item={member} />
        )
    });

    return (
        <div>
            {members}
        </div>
      
    );
}

export default List ; 

/* 
    Na linha 8 iniciamos um método map onde , atribuimos o valor de cada item do array mbr 
    para um componente externo , este componente fica responsável apenas pela renderização
    deixando o código acima mais limpo

    Na Linha 10 na atribuição do objeto ao componente externo estamos passando também o key.
    Isso é uma "exigência" do React para que os dados do loop tenham algum tipo de identificação
    O código funciona senão passarmos , mas o log do navegador fica alertando erros .
*/