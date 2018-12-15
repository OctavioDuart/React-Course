import React , {Component} from 'react';



class StateConcept extends Component {

    // Definindo um estado para o componente
    state = {
        message: "Hello"
    }

        render() {
        //Acessando o estado do componente
        console.log("O Estado do componente é uma mensagem que diz : " , this.state.message);
        return (
            <div>
                <header>
                    <p>Conceito de Estado de um Componente (Abra o console)</p>                                
                </header>
            </div>
            
        )
    }
}

export default StateConcept;

/*
    O  estado de um componente é em um objeto que serve como "banco de dados", para que possamos 
    armazenar valores. (Apenas componentes baseados em classe tem estado).

    No Trecho de código acima estamos definindo um estado para nosso componente (linha 8) e depois o  acessando (linha 14).
    
    Se verificarmos bem um state é como um simples objeto, mas na verdade a algo que os difere . (Veja a aula)

*/

