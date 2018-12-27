import React from 'react';

const EmailItem1 = (props) => {   
    return (
        <div>
            {props.match.params.id} - {props.match.params.departament} 
        </div>
    )
}

export default EmailItem1;

