import React , {Component} from 'react';



class StateConcept extends Component {

    // Definindo um estado para o componente
    state = {
        message: "Hello"
    }   

    changeInput = (e) => {
        this.setState({
            message : e.target.value
        });
        console.log("Novo valor do state = " , this.state.message)
    }

        render() {

    
        return (
            <div>
                <header>
                    <p>Conceito de Estado de um Componente ! . </p>                                
                    <input type="text" 
                           placeholder="Digite Algo e Abra o Console"
                           onChange={this.changeInput} />
                </header>
            </div>
            
        )
    }
}

export default StateConcept;

/*
   Existem duas outas informações importantes sobre o state :
   
   A primeira é o contexto de chamada do método setState (que é o método responsável por alterar o estado).

   Vamos imaginar o seguinte cenário :

   ---------------------------------------------------- 
  |  <input type="text" onChange={this.eventoChange} /> |
  |                                                     |     
  | eventoChange (e) {                                  |
  |      this.setState({                                |
  |          message : e.target.value                   | 
  |      })                                             |
  |  }                                                  |
  ------------------------------------------------------

  Um input que chama um evento onChange e este evento altera o estado do componente, mas observe que escrevemos
  this.setState , e o this faz com que o contexto do método pertença a função do evento e não ao componente
  sendo assim teremos um erro dizendo "Cannot read property 'setState' of undefined" , isso ocorre porque o this
  não pertence ao evento e sim a classe . 

  Então precisamos ligar o contexto do this e para isso temos algumas soluções : 
  
   Usarmos o bind na chamada do evento

   ---------------------------------------------------------------- 
  |  <input type="text" onChange={this.eventoChange.bind(this)} /> |
  |                                                                |     
  | eventoChange (e) {                                             |
  |      this.setState({                                           |
  |          message : e.target.value                              | 
  |      })                                                        |
  |  }                                                             |
  -----------------------------------------------------------------

  O bind 'liga' o contexto do this a função , resolvendo nosso problema.
  


  Mas existe uma solução ainda mais prática : 

  Se escrevermos o evento no formato arrow function , o escopo do this se mantem ao da classe 
  e não é necessário o uso do this . 

   ---------------------------------------------------------------- 
  |                                                                |     
  | eventoChange = (e) => {                                        |
  |      this.setState({                                           |
  |          message : e.target.value                              | 
  |      })                                                        |
  |  }                                                             |
  -----------------------------------------------------------------

  ______________________________________________________________________________________________________________

  A segunda coisa é toda vez que o estado do componente é alterado , temos uma nova renderização na tela, 
  não é um reload na página , APENAS o componente é renderizado com o novo valor . 

  OBS: Usar states somente quando for realmente necessário, pois eles exigem mais processamento da aplicação e deixam o código 
  mais extenso.

*/

