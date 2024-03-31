import React, {useState} from 'react';
import Heading from './Heading';
import Form from './Form';
import List from './List';

function App() {

    const [addItem, setAddItem] = useState([]);

    function handleSubmit(listItem) {

        setAddItem((prevArray) => {
            return [
                ...prevArray,
                listItem
            ]
        });

    }
    
    function handleDelete(id) {
        setAddItem((prevArray) => {
            return prevArray.filter((item, index) => {
                return index !== id;
            })
        })
    }

    console.log(addItem);

    return <div className="container">
        <Heading />
        <Form submit= {handleSubmit} />
        <ul>
                {addItem.map((item, index) =>
                    <List 
                        key={index}
                        id={index}
                        newListItem={item}
                        isDone={handleDelete} 

                    />)}
            </ul>
    </div>
}

export default App;