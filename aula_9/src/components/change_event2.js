/************************************LEIA ANTES O COMENTÁRIO LINHA 26****************************************** */

import React , {Component} from  'react';

class Evento2 extends Component {
    changeConsole2  = (e) => {
        console.log("Você está digitando  ->" , e.target.value)
    }

    render() {
        return (
            <div>
                <section>
                    <p>onChange - Evento 2 -  Sincronizando o Fluxo de Eventos Com Arrow Function</p>   
                    <input type="text" placeholder="Digite Aqui e Depois Abra o Console" 
                        onChange={ (e)=> this.changeConsole2(e)}/>                
                </section>
            </div>
        )
    }
}


export default Evento2;

/*
    @ Algumas  Observações Ao Chamarmos Eventos   : 

    @ Se chamarmos um evento da seguinte forma : 
        <tag onChange={this.evento()} />
        
    O Parênteses faz com que o evento sejá chamado assim que o componente é renderizado automaticamente

    E se eu quiser chamar  um evento dessa forma automaticamente, mas o evento depende de um valor vindo do componente ? 
    
    Por exemplo :
    
    ----------------------------------------------------
    | evento = (e) => {                                   |
    |     console.log("Dado digitado " , e.target.value)  |
    | }                                                   |
    |                                                     |
    | <input type="text" onChange={this.evento() }        |
     ----------------------------------------------------   
     
     
     Nesse caso teremos um erro , pois o evento que é chamado automaticamente imprime o valor de um evento que ainda não 
     aconteceu, é confuso , mas pra resumir não tem o que o evento imprimir ainda pois ele foi chamado antes mesmo de ter
     valor no input 

     Então como chamar um evento de forma automática neste caso sem erros ? 

     A solução que encontramos no código do componente Evento2  foi ANINHAR as funções, basicamente não chamamos mais o 
     evento automaticamente , agora temos um passo a passo a seguir antes do componente ser renderizado , que é : 

     onChange - evento 

     Ou Seja aninhamos as funções para que o evento só seja disparado DEPOIS que o evento do onChange for iniciado
*/
