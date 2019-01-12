import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name: '',
        lastname: ''
    }

    handlename = (e) => {
        this.setState ({
            name: e.target.value
        });
    }

    handlelastname = (e) => {
        this.setState({
            lastname: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault(); // Impede que a página passe por um reload
        console.log(this.state);
    }

    render(){
        return(
          <div className="container">
                <form onSubmit={this.submitForm}>
                    <div className="form_element">
                        <label>Nome</label>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handlename}                    
                        />
                    </div>

                    <div className="form_element">
                        <label>Sobrenome</label>
                        <input
                            type="text"
                            value={this.state.lastname}
                            onChange={this.handlelastname}
                        />
                    </div>
                    <button type="submit">Logar</button>
                </form>               
          </div>
        )
    }
}

export default Controlled;


/*
    Input Controlado

    Para explicar um input controlado é mais fácil explicar um
    input NÃO controlado ...

    Um input NÃO controlado é um input onde os dados preenchidos 
    pelo usuário não passam pelo estado do componente, o input se encarrega de alterar o seu valor
    sem passar por nenhum outro lugar . 

    Já inputs controlados tem seu valor alterado pelo estado do componente, é como se ele pedisse pro estado
    alterar o seu valor com um valor que o input deu pro estado kkkk ...

    ficaria assim :

    input -> recebe valor do usuário
    input envia valor recebido pro estado 
    estado atualiza o valor do input de acordo com o que foi recebido

    input --> estado --> input

    fica mais verboso e trabalhoso codar dessa forma, mas é melhor . React foi feito para que qualquer ação gere uma
    reação, para isso passamos para o estado a ação de alterar o input e não deixar que o input se altere por si só.

    Obtemos o valor de inputs não controlados diretamento da DOM depois de já preenchidos, são menos seguros.

*/