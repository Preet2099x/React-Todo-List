import React, { useState } from 'react';
import './Todo.scss'

function Todo() {
    const [listItem, setListItem] = useState("");
    const [list, setList] = useState([]);
  
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingText, setEditingText] = useState("");
   
    const addItem = () => {
        if (editingIndex !== null) {
            const updatedList = [...list];
            updatedList[editingIndex] = editingText;
    
            setList(updatedList);
            setEditingIndex(null);
            setEditingText("");
        } else {
            if (listItem.trim()) {
                setList([...list, listItem]);
                setListItem("");
            }
        }
    };
  
    const removeItem = (index) => {
        setList(list.filter((_, i) => i !== index));
    };
  
    const editItem = (index) => {
        setEditingIndex(index);
        setEditingText(list[index]);
    };
  
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') 
            addItem();
    };
  
    return (
      <div className='todoContainer'>
  
        <div className="inputbox">
          <input 
            className='searchBar'
            type="text" 
            value={editingIndex !== null ? editingText : listItem} 
            onChange={(e) => editingIndex !== null ? setEditingText(e.target.value) : setListItem(e.target.value)} 
            onKeyDown={handleKeyDown}
          />
          <button className='inputButton' onClick={addItem}>
            {editingIndex !== null ? "Edit" : "Add"}
          </button>
        </div>
  
        <div className="list">
          {list.map((item, index) => (
            <div key={index}>
              {item}
              <button onClick={() => editItem(index)}>e</button>
              <button onClick={() => removeItem(index)}>x</button>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Todo;
