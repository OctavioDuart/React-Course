import React from 'react';

const MemberItem = ({item}) => { //  Usando o Destruct
    return (
        <div className="musicsMembers">
            <h3>{item.name}</h3>
            <div>
                <div>{item.musics}</div>
            </div>
        </div>
    )
}

export default MemberItem;