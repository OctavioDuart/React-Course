import React , {Component} from 'react';

class LifeCycle extends Component {

    state = {
        first : 'Componente recebe os valores default das props',
        second: 'Atribuição dos valores do state',
        third : 'Execução : componentWillMount',
        fourth: 'Renderização do componente',
        fifth : 'Execução : componentDidMount',
        parameter : 'true'
    }

    // Alterando o estado do componente
    changeState = () => {
        (this.state.parameter === 'true') ? this.setState({parameter : 'false'}) : this.setState({parameter: 'true'})
    }

    componentWillUpdate() {
        console.log("Esta função é renderizada sempre que o estado do componente é alterado (Antes da renderização do componente")
    }


 
    render(){               
        return(
            <div>
                <h2>Ciclo de Vida de um Componente</h2>
                <p>1º{this.state.first}</p> 
                <p>2º{this.state.second}</p> 
                <p>3º{this.state.third}</p> 
                <p>4º{this.state.fourth}</p> 
                <p>5º{this.state.fifth}</p>
                <p>6º{this.state.parameter}</p>
                <button onClick={this.changeState}>Clique Neste Botão Para Ver o Componente Sendo Renderizado Novamente</button>
            </div>
        )
    }

    componentDidUpdate() {
        console.log("Esta função é renderizada sempre que o  estado do componente é alterado (Depois da renderização do componente")
    }

}

export default LifeCycle;

/*
    
*/