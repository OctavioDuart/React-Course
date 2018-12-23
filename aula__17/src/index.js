import React , {Component} from 'react';
import ReactDOM from 'react-dom';

//COMPONENTES EXTERNOS
import Header from './components/header';
import List from './components/list';

import JSON from './members.json'


class App extends Component {
    state = {
        members:  JSON,
        filtered : []
    }



    search_member = (e)=>{
        // A variável filtered recebe o valor já filtrado do que foi digitado no campo        
        let filtered = this.state.members.filter((item) =>{               
                return item.name.indexOf(e.target.value) > -1 ; // > -1  ? 
        });
        
        this.setState({
            // Alterando o estado de acordo com o que está sendo digitado 
            filtered 
        });
    }
    
    render(){
        return(
            <div>
                <Header src={this.search_member}/>
                <List mbr={this.state.filtered.length === 0 ? this.state.members : this.state.filtered } />
            </div>
        )
    }
}

ReactDOM.render(
    
    <App/>,
    document.getElementById('root')
)

/*
    Basicamente criamos uma espécie de campo de busca , que pesquisa pelos
    dados do nosso JSON baseado no que o usuário está digitando .

    Como isso  funciona ? 

    Na linha 34 onde estamos renderizando o componente filho <Header> , estamos também
    passando uma props , na qual o valor é o resultado de uma  função que filtra os dados
    de acordo com o que foi digitado no campo .  
    
    No componente <Header> temos um input com um evento onChange :

    ----------------------------------------------
    |   <header>                                 |
    |       <p>Club dos 27</p>                   |
    |       <input type="text"                   |
    |              placeholder="Search Member"   |
    |              onChange={props.src}          |             
    |        />                                  |  
    |   </header>                                |
    ----------------------------------------------

    Repare que o onChange está requisitando a props , ou seja , para cada caractere digitado no
    input ele requisita a props e a props é a função que filtra os dados , com isso temos uma busca dinâmica . 
*/