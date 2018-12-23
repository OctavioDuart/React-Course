import React from 'react';

const Header = (props) => {
   
    return (          
        <div>
            <header>
                <p>Club dos 27</p>
                <input type="text"
                       placeholder="Search Member"
                       onChange={props.src}                        
                />
            </header>
        </div>
        
    )
}

export default Header;
