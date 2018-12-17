import React from 'react';

const List = (props) => {

    const members = props.members.map((member) => {
        return (
            <div className="musicsMembers">
                <h3>{member.name}</h3>
                <div>{member.musics}</div>
            </div>
        )
    });
    return (
        <div>
            {members}
        </div>
    )
}

export default List ; 

/*
    A props que o componente está recebendo é um array de objetos e o React exige que
    esses dados sejam tratados antes de serem renderizados, ou seja , não conseguimos 
    imprimir diretamente um Array de Objetos [{}] ... Para isso usamos o map que trata cada
    item do array  
*/