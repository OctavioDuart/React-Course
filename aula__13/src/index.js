import React , {Component} from 'react';
import ReactDOM from 'react-dom';

//COMPONENTES EXTERNOS
import PropsConcept from './components/props_concept';
import List from './components/list';

import JSON from './members.json'


class App extends Component {
    state = {
        members:  JSON
    }
    
    render(){
        return(
            <div>
                <PropsConcept/>
                <List members={this.state.members} />
            </div>
        )
    }
}

ReactDOM.render(
    
    <App/>,
    document.getElementById('root')
)

/*
    Props são dados que são enviados e recebidos entre diferentes componentes
    A sintaxe para enviar uma props de um componente a outro é simples
    <Componente um_nome_que_vc_quiser={dado que você deseja enviar } />

    O exemplo prático está na linha 20, Neste caso os dados passados são recebidos como 
    parâmetro do componente funcional que está recebendo (arquivo  list.js - linha 3) 
*/