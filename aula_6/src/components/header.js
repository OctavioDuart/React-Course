import React , {Component} from 'react';



class Header extends Component {
    render() {
        return (
            <header><p> My Header Here ! .</p></header>
        )
    }
}

/*
    @ O Componente Header será renderizado estilizado , pois no arquivo index.html (dentro da pasta public)
    @ Adicionamos na linha 14 o link com a  folha de estilo , esta é uma maneira mais viável de renderizar 
    @ Componentes estilizados no React
*/
export default Header;

