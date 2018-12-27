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

