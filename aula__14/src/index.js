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
