import React , {Component} from 'react';



class Btn extends Component {

    changeConsole = () =>{
        console.log("Este log está sendo imprimido por uma função externa")
    }

    render() {
        return (
            <div>
                <button onClick={this.changeConsole}>Clique Aqui Para Disparar o Evento ! .</button>
                <p>(Abra o console)</p>
            </div>
            
        )
    }
}


export default Btn;

/*
    @ Na linha 7 estamos declarando uma simples função que imprime uma mensagem 
    @ Essa mesma função é chamada na linha 14 pelo evento onClick, mas se repararmos
    @ Bem na sua chamada estamos usando "this" e se o tirarmos o código não funciona
    @ Isso acontece porque o this basicamente significa "Nesta Classe", ou seja , ele
    @ Diz que aquela função está declarada na classe, se o this não estiver na chamada
    @ Do evento o React "não sabe onde procurar o evento" e nos retorna um erro 
    @ Dizendo que o evento não foi definido

    @    ENTÃO SEMPRE QUE FORMOS FAZER REFERÊNCIA ENTRE DIFERENTES TRECHOS 
    @    DE CÓDIGOS DE UMA MESMA CLASSE SEMPRE 
    @    DEVEMOS USAR O THIS

*/