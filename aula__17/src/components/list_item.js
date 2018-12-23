import React from 'react';
import {css} from 'glamor';

const MemberItem = ({item}) => { 

    let card = css ({
        border : '1px solid black',
        width : '27%',
        height : '70px',
        marginLeft : '35%',
        marginTop :'2%'
    });

    let card_title = css ({
        color: '#fff',
        background: '#dc3545',
        borderColor: '#dc3545',
        textAlign : 'center'
    });

    let card_musics = css ({
        textAlign: 'center',
        marginTop: '2%'
    });

    return (
        <div {...card}>
            <h3 {...card_title}>{item.name}</h3>
            <div>
                <div {...card_musics }>{item.musics}</div>
            </div>
        </div>
    )
}

export default MemberItem;

