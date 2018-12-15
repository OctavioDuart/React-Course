import React , {Component} from 'react';



class Header extends Component {
    render() {

        const styles = {
            header:{
                background: "#222",
                height: "15%"
            },
            title:{
                textAlign: 'center',
                color : 'white',
                fontFamily: 'Unlock'
            }
        }

        return (
            <header style={styles.header}> <p style={styles.title}> My Header Here ! . </p> </header>
        )
    }
}

export default Header;

/*
    @ Objeto de estilização dentro render para que sejá visivel para o return
    @ Apesar de funcionar este método não é recomendavel pois ocupa muito espaço
    @ Deixando o código mais "poluido" além de deixar a estilização dentro da tag
    @ Existem maneiras mais simples e menos poluidas de estilizar componentes
*/ 