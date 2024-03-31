import React, { useState } from 'react';

function Form(props) {

    const [listItem, setListItem] = useState("");

    function handleChange(event) {
        setListItem(event.target.value);
    }

    return <div className='form'>

        <input onChange={handleChange} name="newItem" type='text' value={listItem} />
        <button onClick={() => {
            props.submit(listItem);
            setListItem('');
        }}>Add</button>
    </div>
}

export default Form;
