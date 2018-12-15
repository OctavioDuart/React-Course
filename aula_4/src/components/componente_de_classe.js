import React , {Component} from 'react';

class ComponenteDeClasse extends Component {
    render(){
        return(
            <div>
                <h3>Este é um componente de classes ! .</h3>
                <div>Ao contrário do componente funcional ele consegue "enxergar" dados de componentes externos
                    e também não se limita a apenas renderizar os elementos, existem mais coisas a serem trabalhadas 
                    em um componente de classes .
                </div>
            </div>
        )
    }
}

export default ComponenteDeClasse ; 