import React , {Component} from 'react';

class LifeCycle extends Component {

    state = {
        first : 'Componente recebe os valores default das props',
        second: 'Atribuição dos valores do state',
        third : 'Execução : componentWillMount',
        fourth: 'Renderização do componente',
        fifth : 'Execução : componentDidMount',
    }

    componentWillMount() {
        console.log("Esta função será executada antes da renderização do componente")
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
            </div>
        )
    }

    componentDidMount(){
        console.log("Esta função será executada depois da renderização do componente")
    }
   
}

export default LifeCycle;

/*
    Componentes em React tem um ciclo de vida e é importante entende-los : 

    O passo a passo que acontece desde o nascimento de um componente até sua renderização : 

    1º A primeira coisa que acontece é o componente receber as props default .
    2º A segunda coisa é definir os valores do estado do componente - (Mesmo que não tenha sido declarado).
    3º A terceira coisa é executar a função  componentWillMount antes da renderização do componente . 
    4º A quarta cois é a renderização do componente .
    5º A quinta coisa é  a executar função componentDidMount depois da renderização do componente
*/