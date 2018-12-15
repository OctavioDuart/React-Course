import React , {Component} from 'react';



class Btn extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{console.log("Evento Disparado")}}>Clique Aqui Para Disparar o Evento ! .</button>
                <p>(Abra o console)</p>
            </div>
            
        )
    }
}


export default Btn;

/*
    @ O Exemplo acima é bem fácil , mas vale anotar algumas coisas : 
    @ 1 - Em React a chamada de eventos click deve ser chamada em camelCase
    @ 2 - Podemos Usar Arrow Function ou Função Anônima Para Dispararmos o Evento

*/

