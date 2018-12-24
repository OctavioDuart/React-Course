import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route , Link } from 'react-router-dom';


//COMPONENTES EXTERNOS 
import Home from    './components/home';
import About from   './components/about';
import Contact from './components/contact';
import EmailItem1 from './components/email_item';


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
                <Route path="/contact" exact component={Contact}></Route>
                <Route path="/contact/:id/:departament" component={EmailItem1}></Route>
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

     ------------------------------------------------------------------------------------------------------------------

     Através do React Router temos algumas formas de determinar como ficará a URL :

     supondo que temos a dominio : 

     www.cursoreact.com .

     --------------------------------------------------------------------------------------------
     | Com o BrowserRouter (que é o que está sendo usado no exemplo acima), a URL ficaria assim :  |
     |                                                                                             |
     | www.cursoreact.com/sessoes/sessao1                                                          |
      --------------------------------------------------------------------------------------------

       --------------------------------------------------------------------------------------------
     | Com o HashRouter  a URL ficaria assim :                                                      |
     |                                                                                              |
     | www.cursoreact.com/sessoes#/sessao1                                                          |
      --------------------------------------------------------------------------------------------

     MemoryRouter a URL fica fixa e nunca é alterada . 
*/