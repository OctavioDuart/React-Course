import React from 'react';
import {Link} from 'react-router-dom';

const Contact = () => {
    return (
       <div>
           <Link to="/contact/email">Email</Link> <br/>
           <Link to="/contact/telephone">Telefone</Link>  <br/>
           <Link to="/contact/telepathy">Telepatia</Link>
       </div>
    )
}

export default Contact ; 