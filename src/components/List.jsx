import React from 'react';

function List(props) {

    return <div
        onClick={() => {
            props.isDone(props.id);
        }}>
        <li>{props.newListItem}</li>
    </div>


}

export default List;