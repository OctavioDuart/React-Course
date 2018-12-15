import React from 'react';


const pessoa = {
    name:"Octávio",
    profissão:"Programador"
}

const funcaoComDadoDinaminco = () => {
    const ano = new Date();
    return ano.getFullYear();
}
    


const Header = () => {
    return <div>A renderização de dados com React pode ser dinâmica, ou seja podemos pegar dados
                externos ao do componente e usa-los . <br/> <br/>
                Na frase : {pessoa.name} é  {pessoa.profissão} -  "Octávio" e "Programador" são dados vindos de um objeto externo ao componente . <br/> <br/>
                Não são só de objetos que podemos pegar dados externos, podemos também pega-los de uma função .<br/> <br/>
                Se você sabe que estamos no ano de {funcaoComDadoDinaminco()} é por causa de uma informação externa ao do componente .
         </div>
}

export default Header; // Exportamos o componente