import React from 'react';
import ReactDOM from 'react-dom';

//COMPONENTES EXTERNOS
import EventOne from './components/change_event';
import EventTwo from './components/change_event2';

ReactDOM.render(
    <div>
        <EventOne/>,
        <EventTwo/>
    </div>,
    document.getElementById('root')
)