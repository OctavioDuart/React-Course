import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route } from 'react-router-dom';


//COMPONENTES EXTERNOS 
import Home from './components/home';
import About from './components/about'
import Contact from './components/contact'

const App = () => {
    return (        
           <BrowserRouter>
            <div>
                <header>
                    Este header não é alterado independente da rota 
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
    A criação de rotas no react pode ser feita através do pacote  react-router-dom .

    O seu funcionamento básico consiste em usar o BrowserRouter na renderização dos componentes e
para cada rota nova declaramos um Route com seu caminho e o componente que será renderizado 

    <BrowserRouter>
                <div>
                    <Route path="/" exact  component={Home}></Route>
                    <Route path="/about"   component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>
                </div>
    </BrowserRouter> 

    Obs: O exact declarado na linha 15 serve para fixar que para a rota "/" apenas o componente Home será renderizado,
pois se repararmos todas as rotas tem "/"  e o React entende que você deseja renderizar todos os componentes pertencentes
ao que foi declarado no path , então para especificarmos usamos o exact . 

*/