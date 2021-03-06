import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route , Link } from 'react-router-dom';


//COMPONENTES EXTERNOS 
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

const App = () => {
    return (        
           <BrowserRouter>
            <div>
                <header>
                    Este header não é alterado independente da rota <br/>
                    <Link to="/">Página Inicial</Link> <br/>
                    <Link to="/contact">Contato</Link> <br/>
                    <Link to="/about">Sobre</Link> <br/>
                    <hr/>
                </header>
                <Route path="/" exact  component={Home}></Route>
                <Route path="/about"   component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
            </div>
           </BrowserRouter>        
    )
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

/*
    O 'Link' do react-router-dom serve para migrarmos de uma página a outra de forma automática , sem ter que alterar
    manualmente na barra de url do navegador : 

    Sua Sintaxe  é :

     <Link to="/rota_a_ser_atendida">Elemento a ser clicado</Link> 
*/