import React from 'react';
import {Link} from 'react-router-dom';

const About = (props) => {    
    return (
        <Link to={{
            pathname : `${props.match.url}/services`
        }}>Clique em mim para ir até a página de nossos serviços (veja a URL)</Link>
    )
}

export default About ;

/*
    A URL  é  recebida pelo componente através da props e com isso podemos deixar a nomeclatura das rotas dinâmicas

    exemplo :

    Supondo que meu dominio é : www.acdc.com

    ai navego até uma rota do dominio : www.acdc.com/integrantes

    se eu quiser ir até um outro dominio condizente ao dominio atual uso a seguinte forma 
    
    pathname : `${props.match.url}/angus-young`

    e o resultado final da URL seria : www.acdc.com/integrantes/angus-young



*/