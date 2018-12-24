import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route , Link  , Switch } from 'react-router-dom';


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
                <Switch>
                    <Route path="/contact/:id/:departament" component={EmailItem1}></Route>
                    <Route path="/about"   component={About}></Route>                
                    <Route path="/contact"  component={Contact}></Route>                    
                    <Route path="/"   component={Home}></Route>
                </Switch>                
            </div>
           </BrowserRouter>        
    )
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

/*
   Com o switch não temos que usar mais o exact nas rotas .
   Ele funciona como a estrutura do Switch Case do JavaScript , onde cada rota é um Case .


   É recomendavel deixar as rotas mais especificas acima das mais genéricas : 
   

    Em vez disso : 

     <Switch>
        <Route path="/"         component={Home}></Route>        
        <Route path="/about"    component={About}></Route>                
        <Route path="/contact"  component={Contact}></Route>                    
        <Route path="/contact/:id/:departament" component={EmailItem1}></Route>       
    </Switch>   

   Isso  : 

    <Switch>
        <Route path="/contact/:id/:departament" component={EmailItem1}></Route>
        <Route path="/about"    component={About}></Route>                
        <Route path="/contact"  component={Contact}></Route>                    
        <Route path="/"         component={Home}></Route>
    </Switch>   
    
   
*/