import React , {Component} from 'react';



class Evento1 extends Component {

   changeConsole = () => {
       console.log("Este evento foi disparado assim que o componente do evento 1 foi renderizado ");
   }

    render() {
        return (
            <div>
                <header>
                    <p>onChange - Evento 1 - Chamada Simples de Evento</p>   
                    <input type="text" placeholder="Digite Aqui e Depois Abra o Console" onChange={this.changeConsole()}/>                
                </header>
            </div>
            
        )
    }
}

export default Evento1;

/*
    @ O que está acontecendo ? 
    @ No input estamos declarando um evento onChange , basicamente este evento é acionado
    @ Toda vez que temos uma alteração naquele elemento onde ele está inserido
    @ Então a cada caractere que digitamos no input ele "chama" a função changeConsole
    @ Esta função está recebendo um parâmetro e neste parâmetro estão incluso todos os eventos acionados por trás 
    @ Do digito de um caractere e inclusive o próprio caractere em si que tem seu valor através encontrado
    @ Através do objeto target.value
*/ 

