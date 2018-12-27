import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route , Link  , Switch } from 'react-router-dom';


//COMPONENTES EXTERNOS 
import Home from    './components/home';
import About from   './components/about';
import Contact from './components/contact';
import EmailItem1 from './components/email_item';
import LyfeCicle from './components/lyfecicle';
import Conditional from './components/conditional';
import ConditionalWithFunction from './components/conditionalwithfunction';

const App = () => {
    return (        
           <BrowserRouter>
            <div>
                <header>
                    Este header não é alterado independente da rota <br/>
                    <Link to="/">Página Inicial</Link> <br/>
                    <Link to="/contact">Contato</Link> <br/>
                    <Link to="/about">Sobre</Link> <br/>
                    <Link to="/lyfe_cicle">Ciclo de Vida</Link><br/>
                    <Link to="/conditional">Renderização Condicional</Link><br/>
                    <Link to="/conditional_with_function">Renderização Condicional Com Função</Link>
                    <hr/>
                </header>
                <Switch>
                    <Route path="/contact/:id/:departament" component={EmailItem1}></Route>
                    <Route path="/about"   component={About}></Route>                
                    <Route path="/contact"  component={Contact}></Route>                    
                    <Route path="/lyfe_cicle" component={LyfeCicle}></Route>
                    <Route path="/conditional" component={Conditional}></Route>
                    <Route path="/conditional_with_function" component={ConditionalWithFunction}></Route>
                    <Route path="/" exact  component={Home}></Route>                    
                    <Route render={()=> <h1>404 - Vaza daqui que você digitou merda na URL </h1>}></Route>
                </Switch>                
            </div>
           </BrowserRouter>        
    )
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

